module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const { image } = req.body || {};
    if (!image) return res.status(400).json({ error: 'No image provided' });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Server config error' });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'This is an Israeli firearms license (רשיון כלי ירייה). Read ALL text carefully and extract fields as JSON only. IMPORTANT field mapping:\n- "name": the value next to שם: (full Hebrew name)\n- "id": 9-digit number next to מ. זהות: (also appears near barcode and bottom of card). This is NOT the license number.\n- "license": 10-digit number next to מס\': (this is the license/permit number at the top)\n- "weaponType": value next to סוג: (אקדח, רובה, etc.)\n- "model": value next to תוצרת: (manufacturer like GLOCK, SIG, etc.)\n- "serial": value next to מספר: (alphanumeric serial like CBMH944)\n- "caliber": value next to קליבר: normalized (9x19→9mm, 5.56x45→5.56mm, 7.62x51→7.62mm)\n- "expiry": date next to בתוקף עד: in YYYY-MM-DD format\nReturn ONLY the JSON object. Use "" for unreadable fields.'
            },
            {
              type: 'image_url',
              image_url: { url: image, detail: 'high' }
            }
          ]
        }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(500).json({ error: 'AI error', detail: data.error?.message || 'Unknown' });
    }

    const text = data.choices[0].message.content;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return res.status(500).json({ error: 'Parse error', raw: text });

    const fields = JSON.parse(jsonMatch[0]);
    return res.status(200).json(fields);
  } catch (err) {
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
};
