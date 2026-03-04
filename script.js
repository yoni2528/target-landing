// ===== DIARY DEMO =====
const entries = [];

function startDiary() {
  document.getElementById('diary-start').style.display = 'none';
  const form = document.getElementById('diary-form');
  form.classList.add('active');
  document.getElementById('d-date').valueAsDate = new Date();
  document.getElementById('d-name').focus();
}

function saveEntry() {
  const name = document.getElementById('d-name').value.trim();
  const id = document.getElementById('d-id').value.trim();
  const weaponType = document.getElementById('d-weapon-type').value;

  if (!name || !weaponType) {
    shakeForm();
    return;
  }

  entries.push({
    date: document.getElementById('d-date').value,
    trainingType: document.getElementById('d-training-type').value,
    ammo: document.getElementById('d-ammo').value || '',
    name,
    id,
    phone: document.getElementById('d-phone').value.trim(),
    address: document.getElementById('d-address').value.trim(),
    weaponType,
    model: document.getElementById('d-model').value.trim(),
    caliber: document.getElementById('d-caliber').value,
    serial: document.getElementById('d-serial').value.trim(),
    license: document.getElementById('d-license').value.trim(),
    licenseExp: document.getElementById('d-license-exp').value,
  });

  // Clear shooter-specific fields (keep date, training type, ammo)
  document.getElementById('d-name').value = '';
  document.getElementById('d-id').value = '';
  document.getElementById('d-phone').value = '';
  document.getElementById('d-address').value = '';
  document.getElementById('d-weapon-type').value = '';
  document.getElementById('d-model').value = '';
  document.getElementById('d-caliber').value = '';
  document.getElementById('d-serial').value = '';
  document.getElementById('d-license').value = '';
  document.getElementById('d-license-exp').value = '';
  document.getElementById('d-name').focus();

  document.querySelector('#diary-form h3').textContent = `יורה חדש (${entries.length} נשמרו)`;
}

function shakeForm() {
  const card = document.getElementById('diary-form');
  card.style.animation = 'shake 0.4s ease';
  setTimeout(() => card.style.animation = '', 400);
}

function finishDiary() {
  const name = document.getElementById('d-name').value.trim();
  if (name) saveEntry();

  if (entries.length === 0) {
    shakeForm();
    return;
  }

  document.getElementById('diary-form').classList.remove('active');
  showResults();
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}.${m}.${y}`;
}

function showResults() {
  const results = document.getElementById('diary-results');
  results.classList.add('active');

  document.getElementById('entry-count').textContent = `${entries.length} יורים ביומן`;

  const tbody = document.getElementById('entries-body');
  tbody.innerHTML = entries.map((e, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${formatDate(e.date)}</td>
      <td>${e.name}</td>
      <td>${e.id || '—'}</td>
      <td>${e.phone || '—'}</td>
      <td>${e.address || '—'}</td>
      <td>${e.trainingType}</td>
      <td>${e.ammo || '—'}</td>
      <td>${e.weaponType}</td>
      <td>${e.model || '—'}</td>
      <td>${e.caliber || '—'}</td>
      <td>${e.serial || '—'}</td>
      <td>${e.license || '—'}</td>
      <td>${formatDate(e.licenseExp)}</td>
    </tr>`).join('');
}

function addMore() {
  document.getElementById('diary-results').classList.remove('active');
  const form = document.getElementById('diary-form');
  form.classList.add('active');
  document.querySelector('#diary-form h3').textContent = `יורה חדש (${entries.length} נשמרו)`;
  document.getElementById('d-name').focus();
}

function resetDiary() {
  entries.length = 0;
  document.getElementById('diary-results').classList.remove('active');
  document.getElementById('diary-start').style.display = '';
  document.querySelector('#diary-form h3').textContent = 'יורה חדש';
}

// ===== OCR (AI Vision) =====
async function runOCR(input) {
  if (!input.files || !input.files[0]) return;

  const statusEl = document.getElementById('ocr-status');
  statusEl.textContent = 'קורא רישיון עם AI...';
  statusEl.className = 'ocr-status loading';

  try {
    // Convert image to base64 data URL
    const file = input.files[0];
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.readAsDataURL(file);
    });

    statusEl.textContent = 'מנתח תמונה עם AI... (5-10 שניות)';

    const resp = await fetch('/api/ocr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64 })
    });

    const fields = await resp.json();
    console.log('AI OCR result:', fields);
    if (!resp.ok || fields.error) throw new Error(fields.detail || fields.error || 'AI error');

    let filled = 0;
    const setField = (id, val) => {
      if (val) { document.getElementById(id).value = val; filled++; }
    };

    setField('d-name', fields.name);
    setField('d-id', fields.id);
    setField('d-license', fields.license);
    setField('d-weapon-type', fields.weaponType);
    setField('d-model', fields.model);
    setField('d-serial', fields.serial);
    setField('d-caliber', fields.caliber);
    setField('d-license-exp', fields.expiry);

    statusEl.textContent = filled > 0
      ? `זוהו ${filled} שדות מהרישיון. בדוק ותקן לפי הצורך.`
      : 'לא הצלחנו לזהות שדות. נסה תמונה ברורה יותר.';
    statusEl.className = 'ocr-status done';

    setTimeout(() => { statusEl.textContent = ''; statusEl.className = 'ocr-status'; }, 8000);
  } catch (err) {
    console.error('OCR error:', err);
    statusEl.textContent = 'שגיאה: ' + err.message;
    statusEl.className = 'ocr-status';
    setTimeout(() => { statusEl.textContent = ''; }, 6000);
  }

  input.value = '';
}

// ===== PDF EXPORT =====
async function exportPDF() {
  if (!entries.length) return alert('אין רשומות לייצוא');

  const btn = document.querySelector('[onclick="exportPDF()"]');
  if (btn) { btn.textContent = 'מייצא PDF...'; btn.disabled = true; }

  // Build hidden HTML table for capture
  const wrap = document.createElement('div');
  wrap.id = 'pdf-render';
  wrap.style.cssText = 'position:fixed;top:-9999px;left:0;width:1400px;direction:rtl;font-family:Heebo,sans-serif;background:#fff;padding:30px;';

  const firstDate = entries.length > 0 ? formatDate(entries[0].date) : '';
  wrap.innerHTML = `
    <div style="background:#0a1628;padding:16px 24px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div style="color:#fff;font-size:22px;font-weight:700;">יומן יורים</div>
      <div style="color:#aaa;font-size:13px;">${firstDate} | ${entries.length} יורים</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;text-align:center;">
      <thead>
        <tr style="background:#2979ff;color:#fff;font-weight:600;">
          <th style="padding:8px 4px;">מס׳</th>
          <th style="padding:8px 4px;">תאריך</th>
          <th style="padding:8px 4px;">שם מלא</th>
          <th style="padding:8px 4px;">ת.ז</th>
          <th style="padding:8px 4px;">טלפון</th>
          <th style="padding:8px 4px;">סוג אימון</th>
          <th style="padding:8px 4px;">כמות תחמושת</th>
          <th style="padding:8px 4px;">סוג נשק</th>
          <th style="padding:8px 4px;">דגם</th>
          <th style="padding:8px 4px;">קוטר</th>
          <th style="padding:8px 4px;">מס׳ כלי</th>
          <th style="padding:8px 4px;">מס׳ רישיון</th>
          <th style="padding:8px 4px;">תוקף רישיון</th>
        </tr>
      </thead>
      <tbody>
        ${entries.map((e, i) => `
          <tr style="background:${i % 2 ? '#f7f8fb' : '#fff'};">
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${i + 1}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${formatDate(e.date)}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;font-weight:500;">${e.name}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.id || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.phone || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.trainingType}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.ammo || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.weaponType}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.model || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.caliber || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.serial || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${e.license || '—'}</td>
            <td style="padding:6px 4px;border-bottom:1px solid #e0e0e0;">${formatDate(e.licenseExp)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <div style="display:flex;justify-content:space-between;margin-top:24px;font-size:12px;color:#666;">
      <div>שם מדריך: ____________</div>
      <div>חתימת מנהל מטווח: ____________</div>
    </div>
    <div style="text-align:center;margin-top:16px;font-size:10px;color:#aaa;">נוצר באמצעות מערכת מטרה — מערכת לניהול מטווח</div>
  `;

  document.body.appendChild(wrap);

  try {
    const canvas = await html2canvas(wrap, { scale: 2, useCORS: true });
    document.body.removeChild(wrap);

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    // Fit image to page with margins
    const margin = 8;
    const imgW = pageW - margin * 2;
    const imgH = (canvas.height / canvas.width) * imgW;
    doc.addImage(imgData, 'JPEG', margin, margin, imgW, Math.min(imgH, pageH - margin * 2));

    doc.save('יומן-יורים.pdf');
  } catch (err) {
    console.error('PDF error:', err);
    document.body.removeChild(wrap);
    alert('שגיאה ביצירת PDF');
  }

  if (btn) { btn.textContent = 'ייצוא PDF'; btn.disabled = false; }
}

// ===== CTA LEAD FORM =====
async function submitLead() {
  const name = document.getElementById('c-name').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  const range = document.getElementById('c-range').value.trim();

  if (!name || !phone) return;

  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'שולח...';
  btn.disabled = true;

  try {
    const message = `🎯 ליד חדש מדף הנחיתה!\n\nשם: ${name}\nטלפון: ${phone}\nמטווח: ${range || 'לא צוין'}\n\nתאריך: ${new Date().toLocaleDateString('he-IL')}`;

    await fetch('https://waha.mtra.co.il/api/sendText', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: '972558816868@c.us',
        text: message,
        session: 'default'
      })
    });
  } catch (e) {}

  document.getElementById('cta-form-wrap').style.display = 'none';
  document.getElementById('cta-success').style.display = 'block';
}

// ===== FAQ =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  if (!wasActive) item.classList.add('active');
}


// ===== FOOTER ACTIONS =====
function shareSite() {
  const url = window.location.href;
  const text = 'מטרה — מערכת לניהול מטווח. כנסו לראות:';
  if (navigator.share) {
    navigator.share({ title: 'מטרה', text, url });
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert('הקישור הועתק!');
    });
  }
}

function switchLang() {
  alert('English version coming soon!');
}

// Video demo
function playDemo(el) {
  el.innerHTML = '<video src="demo.mp4" autoplay controls style="width:100%;height:100%;object-fit:cover;border-radius:16px;"></video>';
}

// ===== SCROLL REVEAL ANIMATIONS =====
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animateMockup(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
})();

// Animate bars, charts, and counters when a module becomes visible
function animateMockup(el) {
  // Horizontal bars (ammo gauges)
  el.querySelectorAll('.anim-bar').forEach(bar => {
    const w = bar.dataset.width;
    bar.style.setProperty('--w', w);
    setTimeout(() => { bar.style.width = w; }, 200);
  });

  // Horizontal breakdown bars (revenue rows)
  el.querySelectorAll('.anim-bar-h').forEach(bar => {
    const w = bar.dataset.width;
    bar.style.setProperty('--w', w);
  });

  // Count-up numbers
  el.querySelectorAll('.mock-count').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const prefix = counter.dataset.prefix || '';
    const suffix = counter.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      counter.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    setTimeout(() => requestAnimationFrame(tick), 400);
  });

  // Table rows slide in
  el.querySelectorAll('.mod-tbl-row').forEach((row, i) => {
    setTimeout(() => row.classList.add('show'), 200 + i * 150);
  });

  // Init carousel if present
  const carousel = el.querySelector('.mod-carousel');
  if (carousel && !carousel._init) initCarousel(carousel);
}

// ===== CAROUSEL (Module 1) =====
function initCarousel(carousel) {
  carousel._init = true;
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.dot');
  let current = 0;
  let timer;
  const speed = parseInt(carousel.dataset.speed) || 2000;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    animateSlide(slides[current]);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), speed);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Don't auto-start — wait for animateStickyCard to trigger
  carousel._start = function() {
    animateSlide(slides[0]);
    startTimer();
  };
}

function animateSlide(slide) {
  // Typing animation
  slide.querySelectorAll('.mod-typing').forEach(el => {
    const text = el.dataset.text;
    const delay = parseInt(el.dataset.delay) || 0;
    el.textContent = '';
    el.classList.remove('typed');
    if (el.parentElement) el.parentElement.classList.remove('typed');
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent = text.substring(0, ++i);
        if (i >= text.length) {
          clearInterval(interval);
          el.classList.add('typed');
          if (el.parentElement) el.parentElement.classList.add('typed');
        }
      }, 70);
    }, delay);
  });

  // Show form button after all typing
  const formBtn = slide.querySelector('.mod-form-btn');
  if (formBtn) {
    formBtn.classList.remove('show');
    setTimeout(() => formBtn.classList.add('show'), 3600);
  }

  // Show search result
  const result = slide.querySelector('.mod-search-result');
  if (result) {
    result.classList.remove('show');
    setTimeout(() => result.classList.add('show'), 1800);
  }

  // Show cloud flow
  const cloud = slide.querySelector('.mod-cloud-flow');
  if (cloud) {
    cloud.classList.remove('show');
    setTimeout(() => cloud.classList.add('show'), 2400);
  }

  // Table rows
  slide.querySelectorAll('.mod-tbl-row').forEach((row, i) => {
    row.classList.remove('show');
    setTimeout(() => row.classList.add('show'), 200 + i * 150);
  });
}

// ===== STICKY MODULES SCROLL =====
(function initStickyModules() {
  const textBlocks = document.querySelectorAll('.sticky-text-block');
  const cards = document.querySelectorAll('.sticky-card');
  const dots = document.querySelectorAll('.sticky-dot');
  const dotsWrap = document.querySelector('.sticky-dots');
  if (!textBlocks.length) return;

  let currentIdx = 0;
  const section = document.getElementById('modules');

  function update() {
    const viewCenter = window.innerHeight / 2;
    let activeIdx = 0;

    textBlocks.forEach((block, i) => {
      const rect = block.getBoundingClientRect();
      if (rect.top < viewCenter && rect.bottom > viewCenter) activeIdx = i;
    });

    // Show/hide dots based on section visibility
    if (dotsWrap) {
      const sRect = section.getBoundingClientRect();
      const inView = sRect.top < window.innerHeight * 0.3 && sRect.bottom > window.innerHeight * 0.5;
      dotsWrap.classList.toggle('visible', inView);
    }

    if (activeIdx !== currentIdx) {
      currentIdx = activeIdx;
      textBlocks.forEach((b, i) => b.classList.toggle('active', i === activeIdx));
      cards.forEach((c, i) => c.classList.toggle('active', i === activeIdx));
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
      // Trigger count-up animations for newly active card
      animateStickyCard(cards[activeIdx]);
    }
  }

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      textBlocks[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

function animateStickyCard(card) {
  if (!card || card._animated) return;
  card._animated = true;
  // Init and start carousel when card becomes visible
  const carousel = card.querySelector('.mod-carousel');
  if (carousel) {
    if (!carousel._init) initCarousel(carousel);
    if (carousel._start) { carousel._start(); carousel._start = null; }
  }
  // Count-up numbers
  card.querySelectorAll('.mock-count').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const prefix = counter.dataset.prefix || '';
    const suffix = counter.dataset.suffix || '';
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    setTimeout(() => requestAnimationFrame(tick), 300);
  });
  // Typing animations
  card.querySelectorAll('.mod-typing, .dl-typing').forEach(el => {
    const text = el.dataset.text;
    const delay = parseInt(el.dataset.delay) || 0;
    el.textContent = '';
    el.classList.remove('typed');
    if (el.parentElement) el.parentElement.classList.remove('typed');
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent = text.substring(0, ++i);
        if (i >= text.length) { clearInterval(interval); el.classList.add('typed'); if (el.parentElement) el.parentElement.classList.add('typed'); }
      }, 70);
    }, delay);
  });
  // Show form button
  const formBtn = card.querySelector('.mod-form-btn');
  if (formBtn) { formBtn.classList.remove('show'); setTimeout(() => formBtn.classList.add('show'), 3600); }
}

// ===== SHAKE ANIMATION (injected) =====
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  50% { transform: translateX(8px); }
  75% { transform: translateX(-4px); }
}
`;
document.head.appendChild(style);
