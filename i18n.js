// ===== MATARA i18n — Internationalization =====
// Hebrew is default (RTL). English switches to LTR.

const translations = {
  he: {
    // Page title / meta
    'page.title': 'מטרה — מערכת לניהול מטווח',

    // NAV
    'nav.logo': 'מטרה',
    'nav.join': 'להצטרפות',
    'nav.login': 'התחברות',

    // DIARY SECTION
    'diary.title': 'צור יומן יורים דיגיטלי בחינם',
    'diary.sub': 'בלי הרשמה. בלי תשלום. עכשיו.',
    'diary.cta': 'צור יומן יורים עכשיו',
    'diary.form-title': 'יורה חדש',
    'diary.ocr.camera': 'צלם רישיון נשק',
    'diary.ocr.gallery': 'העלה מהגלריה',
    'diary.ocr.hint': 'או מלא ידנית למטה',

    // Diary form sections
    'diary.section.training': 'פרטי אימון',
    'diary.label.date': 'תאריך אימון',
    'diary.label.type': 'סוג אימון',
    'diary.label.ammo': 'כמות תחמושת',
    'diary.section.shooter': 'פרטי היורה',
    'diary.label.name': 'שם מלא',
    'diary.label.id': 'ת.ז',
    'diary.label.phone': 'טלפון',
    'diary.label.address': 'כתובת',
    'diary.section.weapon': 'פרטי נשק ורישיון',
    'diary.label.weapon-type': 'סוג נשק',
    'diary.label.model': 'דגם',
    'diary.label.caliber': 'קוטר',
    'diary.label.serial': 'מס׳ כלי (סידורי)',
    'diary.label.license': 'מס׳ רישיון',
    'diary.label.license-exp': 'תוקף רישיון',

    // Diary form placeholders
    'diary.ph.ammo': '50',
    'diary.ph.name': 'ישראל ישראלי',
    'diary.ph.address': 'עיר מגורים',
    'diary.ph.model': 'גלוק 17',
    'diary.ph.serial': 'GL171US',
    'diary.ph.license': '1201028175',

    // Training type options
    'diary.opt.new-armed': 'מתחמש חדש',
    'diary.opt.refresh': 'רענון',
    'diary.opt.renew': 'חידוש רישיון',
    'diary.opt.professional': 'ירי מקצועי',
    'diary.opt.group': 'אימון קבוצתי',
    'diary.opt.supervisor': 'קורס מפקחים',
    'diary.opt.instructor': 'קורס מדריכים',
    'diary.opt.free': 'ירי חופשי',

    // Weapon type options
    'diary.opt.weapon-choose': 'בחר...',
    'diary.opt.pistol': 'אקדח',
    'diary.opt.rifle': 'רובה',
    'diary.opt.hunting-rifle': 'רובה ציד',
    'diary.opt.smg': 'תת מקלע',

    // Caliber options
    'diary.opt.caliber-choose': 'בחר...',

    // Form actions
    'diary.btn.save': 'שמור והמשך ליורה הבא',
    'diary.btn.finish': 'סיום וצפייה ביומן',

    // Results
    'diary.results.title': 'יומן יורים',
    'diary.table.num': 'מס׳',
    'diary.table.date': 'תאריך',
    'diary.table.name': 'שם מלא',
    'diary.table.id': 'ת.ז',
    'diary.table.phone': 'טלפון',
    'diary.table.address': 'כתובת',
    'diary.table.type': 'סוג אימון',
    'diary.table.ammo': 'כמות תחמושת',
    'diary.table.weapon': 'סוג נשק',
    'diary.table.model': 'דגם',
    'diary.table.caliber': 'קוטר',
    'diary.table.serial': 'מס׳ כלי',
    'diary.table.license': 'מס׳ רישיון',
    'diary.table.license-exp': 'תוקף רישיון',
    'diary.btn.export': 'ייצוא ל-PDF',
    'diary.btn.add': 'הוסף יורה',
    'diary.btn.reset': 'התחל מחדש',
    'diary.results.upsell': 'עכשיו תדמיין את זה לכל הלקוחות שלך. <strong>אוטומטית.</strong>',

    // HERO
    'hero.title': 'המערכת לניהול מטווח',
    'hero.accent': 'תנהל מטווח, לא ניירת ובירוקרטיה',
    'hero.desc': 'מערכת אחת שמחליפה את הניירת, הטלפונים והאקסלים. בנויה לאנשי מטווח.',
    'hero.cta': 'התחל בחינם',
    // Dashboard mockup labels
    'hero.dash.title': 'מטרה — דשבורד',
    'hero.dash.appointments': 'תורים היום',
    'hero.dash.revenue': 'הכנסות החודש',
    'hero.dash.clients': 'לקוחות פעילים',
    'hero.dash.bullets': 'כדורים החודש',
    'hero.dash.col.client': 'לקוח',
    'hero.dash.col.appointment': 'תור',
    'hero.dash.col.status': 'סטטוס',
    'hero.dash.status.approved': 'מאושר',
    'hero.dash.status.waiting': 'ממתין',

    // ADVANTAGES
    'adv1.title': 'הכל דיגיטלי',
    'adv1.desc': 'נגמרו הקלסרים, האקסלים והנייר. כל פעולה — מיומן יורים ועד דוח תחמושת — דיגיטלית לחלוטין, נגישה מכל מכשיר, בכל רגע.',
    'adv1.stat': '0 דפים. 100% ענן.',
    'adv2.title': 'הכל במקום אחד',
    'adv2.desc': 'יומנים, תורים, לקוחות, תחמושת, מדריכים, הכנסות, תזכורות — הכל מערכת אחת. בלי לקפוץ בין 10 כלים שונים.',
    'adv2.stat': '15+ מודולים. מערכת אחת.',
    'adv3.title': 'מוכן לביקורת תמיד',
    'adv3.desc': 'ביקורת מהמשרד לביטחון לאומי? דוח תחמושת? יומן יורים? הכל מוכן ומסודר לפי הדרישות. תמיד.',
    'adv3.stat': '100% תאימות לדרישות המשרד לביטחון לאומי',

    // CTA STRIP
    'cta-strip.text': 'מוכן להפסיק עם הניירת?',
    'cta-strip.btn': 'להצטרפות בחינם',

    // VIDEO SECTION
    'video.tag': 'ראה את המערכת בפעולה',
    'video.title': 'דמו קצר של מטרה',
    'video.cta': 'צפה בדמו (60 שניות)',
    'video.mock1': 'יומן יורים',
    'video.mock2': 'תורים',
    'video.mock3': 'תחמושת',
    'video.mock4': 'לקוחות',
    'video.mock5': 'הכנסות',
    'video.mock6': 'מדריכים',

    // MODULES SECTION
    'modules.tag': 'מה בפנים?',
    'modules.title': '8 מודולים. מערכת אחת.',
    'modules.sub': 'גלול למטה לצפייה במודולים',

    // Module sticky cards — visual content
    // Card 0: Diary form demo
    'mod.card0.header': 'יומן יורים דיגיטלי',
    'mod.card0.field.name': 'שם מלא',
    'mod.card0.field.id': 'ת.ז',
    'mod.card0.field.weapon': 'סוג נשק',
    'mod.card0.field.type': 'סוג אימון',
    'mod.card0.btn': 'שמור יורה',
    // Card 0: Table headers
    'mod.card0.tbl.name': 'שם',
    'mod.card0.tbl.weapon': 'נשק',
    'mod.card0.tbl.caliber': 'קוטר',
    'mod.card0.tbl.qty': 'כמות',
    'mod.card0.tbl.type': 'סוג',
    'mod.card0.badge.shooters': '4 יורים',
    'mod.card0.badge.bullets': '200 כדורים',
    // Card 0: search/export slide
    'mod.card0.found': 'נמצא ביומן ✓',
    'mod.card0.export': 'ייצא יומן יורים',

    // Card 1: Appointments
    'mod.card1.header': 'קביעת תור',
    'mod.card1.slot.free': 'פנוי',
    'mod.card1.slot.selected': 'נבחר',
    'mod.card1.confirm': 'אישור תור',

    // Card 2: Ammo tracking
    'ammo.tab.day': 'היום',
    'ammo.tab.week': 'השבוע',
    'ammo.tab.month': 'החודש',
    'ammo.tab.year': 'השנה',
    'ammo.total.label': 'סה״כ נורו',
    'ammo.export': 'ייצא דוח תחמושת',

    // Card 3: CRM
    'crm.search.ph': 'חיפוש לקוח...',
    'crm.clients-label': 'לקוחות החודש',
    'crm.retention': 'שימור',
    'crm.new-customers': 'לקוחות חדשים',
    'crm.reminders': 'תזכורות לרענון/חידוש',

    // Card 4: Revenue
    'rev.change': '+12% מהחודש שעבר',
    'rev.refresh': 'רענון',
    'rev.new-armed': 'מתחמש חדש',
    'rev.professional': 'ירי מקצועי',

    // Card 5: Instructors
    'shift.title': 'סידור עבודה — שבוע 10/03',

    // Card 6: Reminders / notifications
    'notif1.title': 'תזכורת חידוש',
    'notif1.body': 'יוסי, הרישיון שלך פג בעוד 30 יום',
    'notif2.title': 'מתגעגעים!',
    'notif2.body': 'לא ראינו אותך 60 יום. 20% הנחה',
    'notif3.title': 'תור מחר',
    'notif3.body': 'דני, יש לך תור ב-10:30',
    'notif4.title': 'סיכום חודשי',
    'notif4.body': 'דוח פעילות מרץ 2026',

    // Card 7: More modules
    'mod.card7.center': 'מודולים',

    // Sticky text blocks (left panel)
    'mod1.tag': 'יומן יורים דיגיטלי',
    'mod1.title': 'מפסיקים לכתוב הכל בקלסרים',
    'mod1.desc': 'הכל דיגיטלי ומאוחסן בענן! נשמר לנצח, ומוודא שתעמוד בביקורת 100%. אין מקום לטעויות.',
    'mod1.feat1': 'מילוי אוטומטי',
    'mod1.feat2': 'ייצוא PDF',
    'mod1.feat3': 'שמירה בענן',

    'mod2.tag': 'תיאום תורים',
    'mod2.title': 'הלקוחות קובעים לבד. אתה לא עונה לטלפון.',
    'mod2.desc': 'לקוחות קובעים תור מהנייד, מקבלים אישור ותזכורת אוטומטית. תכנון כוח אדם חכם, צפי הכנסות, ואפס הפתעות.',
    'mod2.feat1': 'קביעה מהנייד',
    'mod2.feat2': 'אישור אוטומטי',
    'mod2.feat3': 'תזכורות',

    'mod3.tag': 'מעקב תחמושת',
    'mod3.title': 'קבל שליטה על התחמושת במטווח',
    'mod3.desc': 'דוח תחמושת עם מעקב על כל כדור שנורה. הכל מוכן לשליחה למשרד לביטחון לאומי.',
    'mod3.feat1': 'מדי מלאי חיים',
    'mod3.feat2': 'התראות מלאי נמוך',
    'mod3.feat3': 'ייצוא למפקח',

    'mod4.tag': 'ניהול לקוחות ולידים',
    'mod4.title': 'תכיר כל לקוח. אף ליד לא נופל.',
    'mod4.desc': 'CRM שלם — פרטים, היסטוריה, העדפות. לידים חדשים נכנסים ומטופלים אוטומטית.',
    'mod4.feat1': 'פרופיל מלא',
    'mod4.feat2': 'היסטוריית ביקורים',
    'mod4.feat3': 'ניהול לידים',

    'mod5.tag': 'הכנסות ודוחות',
    'mod5.title': 'תדע בדיוק כמה נכנס. ולמה.',
    'mod5.desc': 'דשבורד הכנסות, דוחות חודשיים, פילוח לפי מדריך ושירות. קבלת החלטות על סמך מספרים.',
    'mod5.feat1': 'דשבורד חי',
    'mod5.feat2': 'פילוח הכנסות',
    'mod5.feat3': 'ייצוא דוחות',

    'mod6.tag': 'ניהול מדריכים',
    'mod6.title': 'תדע מי עובד, מתי, וכמה',
    'mod6.desc': 'שיבוץ מדריכים, לוח זמנים שבועי, צפי עומסים. הכל מסודר — גם לך וגם למדריכים.',
    'mod6.feat1': 'סידור עבודה',
    'mod6.feat2': 'מעקב שעות',
    'mod6.feat3': 'צפי עומסים',

    'mod7.tag': 'תזכורות וקמפיינים',
    'mod7.title': 'הלקוח לא שוכח אותך. אתה לא שוכח אותו.',
    'mod7.desc': 'תזכורות אוטומטיות, קמפיינים ממוקדים, ופולואפ שמחזיר לקוחות למטווח.',
    'mod7.feat1': 'SMS אוטומטי',
    'mod7.feat2': 'WhatsApp',
    'mod7.feat3': 'קמפיינים',

    'mod8.tag': 'ועוד מגוון אפשרויות',
    'mod8.title': 'וזה רק ההתחלה. יש עוד הרבה בפנים.',
    'mod8.desc': 'חתימות דיגיטליות, ניהול לידים, קמפיינים ממוקדים, דוחות מתקדמים, תשלום על בסיס הצלחה, מסמכים ותבניות — הכל כלול במערכת אחת.',
    'mod8.feat1': '15 מודולים',
    'mod8.feat2': 'מערכת אחת',
    'mod8.feat3': 'הכל כלול',

    // FAQ
    'faq.tag': 'שאלות נפוצות',
    'faq.title': 'יש שאלות? יש תשובות.',
    'faq1.q': 'כמה עולה המערכת?',
    'faq1.a': 'כרגע ההצטרפות היא בחינם לתקופת הבטא, והתשלום הוא רק על בסיס הצלחה ועל כיסוי הוצאות הענן, המערכות וההודעות של המטווח. אם לא הצלחנו להביא לך אנשים למטווח — אין צורך לשלם.',
    'faq2.q': 'האם המערכת מתאימה גם למטווחים קטנים?',
    'faq2.a': 'בהחלט. המערכת בנויה כך שתתאים למטווח עם מדריך אחד ועד מטווח עם עשרות מדריכים.',
    'faq3.q': 'מה קורה עם הנתונים שלי?',
    'faq3.a': 'כל המידע מאוחסן בענן מאובטח, מגובה באופן יומי, ונגיש רק לך. אנחנו עומדים בכל תקני האבטחה.',
    'faq4.q': 'כמה זמן לוקח להתחיל?',
    'faq4.a': 'תלוי בכם. אנחנו כבר מוכנים לגמרי לצאת לדרך איתכם. רק צריכים מכם פרטים טכניים ויכולים להתחיל לעבוד עם המערכת תוך ימים בודדים.',
    'faq5.q': 'האם המערכת עומדת בדרישות המשרד לביטחון לאומי?',
    'faq5.a': 'כן. המערכת מייצרת דוחות תחמושת ויומני ירי בפורמט שעונה על דרישות המשרד לביטחון לאומי.',
    'faq6.q': 'אפשר לנסות לפני שמתחייבים?',
    'faq6.a': 'את היומן יורים אפשר לנסות ישירות מהדף הזה, בלי הרשמה. כדי להשתמש במערכת המלאה — צריך להירשם. אין תקופת ניסיון בחינם, אבל התשלום הוא רק על בסיס הצלחה.',
    'faq7.q': 'יש תמיכה טכנית?',
    'faq7.a': 'בוודאי. צוות התמיכה שלנו זמין בוואטסאפ, טלפון ומייל. אנחנו מלווים אותך מהרגע הראשון.',
    'faq8.q': 'איפה המידע שלי מאוחסן?',
    'faq8.a': 'כל המידע מאוחסן בענן מאובטח, מגובה יומית, וניתן לגישה בכל רגע. הנתונים שלך הם שלך — ואנחנו דואגים שהם תמיד זמינים.',
    'faq9.q': 'כמה המערכת מאובטחת?',
    'faq9.a': 'המערכת מוגנת בהצפנה מקצה לקצה, אימות דו-שלבי, וגיבויים יומיים אוטומטיים. כל גישה מתועדת וניתנת לביקורת. אנחנו עומדים בתקני אבטחת מידע מחמירים.',
    'faq10.q': 'אפשר לעבוד מהנייד?',
    'faq10.a': 'בהחלט. המערכת מותאמת לחלוטין למובייל — מלא יומן יורים, נהל תורים, וצפה בדוחות ישירות מהסמארטפון, גם בשטח.',
    'faq11.q': 'מה קורה אם אני רוצה לבטל?',
    'faq11.a': 'אין התחייבות. אפשר לבטל בכל רגע. כל המידע שלך ניתן לייצוא מלא לפני ביטול, כך שלא תאבד דבר.',

    // CONTACT / CTA BOX
    'contact.title': 'מוכן להתחיל?',
    'contact.sub': 'הצטרף עכשיו ותן למטווח שלך לעבוד בשבילך',
    'contact.form-title': 'השאר פרטים',
    'contact.form-sub': 'ניצור קשר תוך 24 שעות',
    'contact.label.name': 'שם מלא',
    'contact.label.phone': 'טלפון',
    'contact.label.range': 'שם המטווח',
    'contact.ph.name': 'ישראל ישראלי',
    'contact.ph.phone': '050-1234567',
    'contact.ph.range': 'שם המטווח שלך',
    'contact.btn.submit': 'שלח',
    'contact.success.title': 'תודה!',
    'contact.success.body': 'קיבלנו את הפרטים שלך, ניצור קשר בהקדם.',
    'contact.guide-title': 'איך זה עובד?',
    'contact.step1.title': 'נרשמים בחינם',
    'contact.step1.desc': 'יוצרים חשבון תוך דקה. בלי כרטיס אשראי.',
    'contact.step2.title': 'מגדירים את המטווח',
    'contact.step2.desc': 'מוסיפים מדריכים, מגדירים שעות פעילות, ומתאימים למטווח שלכם.',
    'contact.step3.title': 'מתחילים לעבוד',
    'contact.step3.desc': 'לקוחות קובעים תורים, מילוי יומן יורים אוטומטי, דוחות מוכנים.',
    'contact.step4.title': 'שקט ראש',
    'contact.step4.desc': 'ביקורת מהמשרד לביטחון לאומי? הכל מוכן. דוח תחמושת? לחיצת כפתור.',

    // FOOTER
    'footer.about': 'אודות',
    'footer.settings': 'הגדרות',
    'footer.share': 'שתפו עם חברים',
    'footer.lang': 'ENGLISH',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.cookies': 'מדיניות עוגיות',
    'footer.accessibility': 'הצהרת נגישות',
    'footer.contact': 'צור קשר',
    'footer.copy': '© 2026 מטרה — כל הזכויות שמורות',

    // ABOUT MODAL
    'about.logo': 'מטרה',
    'about.title': 'אודות מטרה',
    'about.p1': 'מטרה היא מערכת דיגיטלית מתקדמת לניהול מטווחי ירי, שפותחה מתוך הבנה עמוקה של הצרכים היומיומיים של מפעילי מטווחים בישראל.',
    'about.p2': 'המערכת מספקת פתרון מקיף הכולל 15 מודולים — מיומן יורים דיגיטלי ומעקב תחמושת, דרך ניהול מדריכים ותיאום תורים, ועד דשבורד ניתוח נתונים ודוחות מתקדמים.',
    'about.p3': 'אנחנו מאמינים שניהול מטווח צריך להיות פשוט, חכם ומדויק. המערכת שלנו מחליפה את הטפסים הידניים, הגיליונות האלקטרוניים והקלסרים — ומרכזת הכל במקום אחד, עם 100% תאימות לדרישות המשרד לביטחון לאומי.',
    'about.h1': 'מודולים',
    'about.h2': 'תאימות רגולטורית',
    'about.h3': 'גישה מכל מכשיר',
    'about.cta': 'רוצים לשמוע עוד? צרו קשר ונשמח לתת הדגמה אישית.',
    'about.btn': 'צור קשר',

    // WhatsApp float
    'wa.text': 'דברו איתנו',
  },

  en: {
    // Page title / meta
    'page.title': 'Matara — Shooting Range Management System',

    // NAV
    'nav.logo': 'Matara',
    'nav.join': 'Join Now',
    'nav.login': 'Log In',

    // DIARY SECTION
    'diary.title': 'Create a Free Digital Shooter Log',
    'diary.sub': 'No sign-up. No payment. Right now.',
    'diary.cta': 'Create Shooter Log Now',
    'diary.form-title': 'New Shooter',
    'diary.ocr.camera': 'Scan Weapon License',
    'diary.ocr.gallery': 'Upload from Gallery',
    'diary.ocr.hint': 'Or fill in manually below',

    // Diary form sections
    'diary.section.training': 'Training Details',
    'diary.label.date': 'Training Date',
    'diary.label.type': 'Training Type',
    'diary.label.ammo': 'Ammunition Count',
    'diary.section.shooter': 'Shooter Details',
    'diary.label.name': 'Full Name',
    'diary.label.id': 'ID Number',
    'diary.label.phone': 'Phone',
    'diary.label.address': 'Address',
    'diary.section.weapon': 'Weapon & License Details',
    'diary.label.weapon-type': 'Weapon Type',
    'diary.label.model': 'Model',
    'diary.label.caliber': 'Caliber',
    'diary.label.serial': 'Serial Number',
    'diary.label.license': 'License Number',
    'diary.label.license-exp': 'License Expiry',

    // Diary form placeholders
    'diary.ph.ammo': '50',
    'diary.ph.name': 'John Smith',
    'diary.ph.address': 'City',
    'diary.ph.model': 'Glock 17',
    'diary.ph.serial': 'GL171US',
    'diary.ph.license': '1201028175',

    // Training type options
    'diary.opt.new-armed': 'New Armed',
    'diary.opt.refresh': 'Refresher',
    'diary.opt.renew': 'License Renewal',
    'diary.opt.professional': 'Professional Shooting',
    'diary.opt.group': 'Group Training',
    'diary.opt.supervisor': 'Supervisor Course',
    'diary.opt.instructor': 'Instructor Course',
    'diary.opt.free': 'Free Shooting',

    // Weapon type options
    'diary.opt.weapon-choose': 'Select...',
    'diary.opt.pistol': 'Pistol',
    'diary.opt.rifle': 'Rifle',
    'diary.opt.hunting-rifle': 'Hunting Rifle',
    'diary.opt.smg': 'Submachine Gun',

    // Caliber options
    'diary.opt.caliber-choose': 'Select...',

    // Form actions
    'diary.btn.save': 'Save & Add Next Shooter',
    'diary.btn.finish': 'Finish & View Log',

    // Results
    'diary.results.title': 'Shooter Log',
    'diary.table.num': '#',
    'diary.table.date': 'Date',
    'diary.table.name': 'Full Name',
    'diary.table.id': 'ID',
    'diary.table.phone': 'Phone',
    'diary.table.address': 'Address',
    'diary.table.type': 'Training Type',
    'diary.table.ammo': 'Ammo Count',
    'diary.table.weapon': 'Weapon Type',
    'diary.table.model': 'Model',
    'diary.table.caliber': 'Caliber',
    'diary.table.serial': 'Serial No.',
    'diary.table.license': 'License No.',
    'diary.table.license-exp': 'License Expiry',
    'diary.btn.export': 'Export to PDF',
    'diary.btn.add': 'Add Shooter',
    'diary.btn.reset': 'Start Over',
    'diary.results.upsell': 'Now imagine this for all your clients. <strong>Automatically.</strong>',

    // HERO
    'hero.title': 'The Shooting Range Management System',
    'hero.accent': 'Manage your range, not paperwork and bureaucracy',
    'hero.desc': 'One system that replaces paperwork, phone calls, and spreadsheets. Built for shooting range professionals.',
    'hero.cta': 'Start for Free',
    // Dashboard mockup labels
    'hero.dash.title': 'Matara — Dashboard',
    'hero.dash.appointments': 'Appointments Today',
    'hero.dash.revenue': 'Revenue This Month',
    'hero.dash.clients': 'Active Clients',
    'hero.dash.bullets': 'Rounds This Month',
    'hero.dash.col.client': 'Client',
    'hero.dash.col.appointment': 'Time',
    'hero.dash.col.status': 'Status',
    'hero.dash.status.approved': 'Confirmed',
    'hero.dash.status.waiting': 'Pending',

    // ADVANTAGES
    'adv1.title': 'Fully Digital',
    'adv1.desc': 'No more binders, spreadsheets, or paper. Every action — from shooter logs to ammo reports — is fully digital, accessible from any device, anytime.',
    'adv1.stat': '0 pages. 100% cloud.',
    'adv2.title': 'Everything in One Place',
    'adv2.desc': 'Logs, appointments, clients, ammo, instructors, revenue, reminders — all in one system. No more jumping between 10 different tools.',
    'adv2.stat': '15+ modules. One system.',
    'adv3.title': 'Always Audit-Ready',
    'adv3.desc': 'Inspection from the National Security Ministry? Ammo report? Shooter log? Everything is ready and organized to meet requirements. Always.',
    'adv3.stat': '100% compliance with National Security Ministry requirements',

    // CTA STRIP
    'cta-strip.text': 'Ready to ditch the paperwork?',
    'cta-strip.btn': 'Join for Free',

    // VIDEO SECTION
    'video.tag': 'See the System in Action',
    'video.title': 'Quick Demo of Matara',
    'video.cta': 'Watch Demo (60 seconds)',
    'video.mock1': 'Shooter Log',
    'video.mock2': 'Appointments',
    'video.mock3': 'Ammo',
    'video.mock4': 'Clients',
    'video.mock5': 'Revenue',
    'video.mock6': 'Instructors',

    // MODULES SECTION
    'modules.tag': "What's Inside?",
    'modules.title': '8 Modules. One System.',
    'modules.sub': 'Scroll down to explore the modules',

    // Module sticky cards — visual content
    'mod.card0.header': 'Digital Shooter Log',
    'mod.card0.field.name': 'Full Name',
    'mod.card0.field.id': 'ID Number',
    'mod.card0.field.weapon': 'Weapon Type',
    'mod.card0.field.type': 'Training Type',
    'mod.card0.btn': 'Save Shooter',
    'mod.card0.tbl.name': 'Name',
    'mod.card0.tbl.weapon': 'Weapon',
    'mod.card0.tbl.caliber': 'Caliber',
    'mod.card0.tbl.qty': 'Qty',
    'mod.card0.tbl.type': 'Type',
    'mod.card0.badge.shooters': '4 Shooters',
    'mod.card0.badge.bullets': '200 Rounds',
    'mod.card0.found': 'Found in Log ✓',
    'mod.card0.export': 'Export Shooter Log',

    // Card 1: Appointments
    'mod.card1.header': 'Book Appointment',
    'mod.card1.slot.free': 'Available',
    'mod.card1.slot.selected': 'Selected',
    'mod.card1.confirm': 'Confirm Appointment',

    // Card 2: Ammo tracking
    'ammo.tab.day': 'Today',
    'ammo.tab.week': 'This Week',
    'ammo.tab.month': 'This Month',
    'ammo.tab.year': 'This Year',
    'ammo.total.label': 'Total Fired',
    'ammo.export': 'Export Ammo Report',

    // Card 3: CRM
    'crm.search.ph': 'Search client...',
    'crm.clients-label': 'Clients This Month',
    'crm.retention': 'Retention',
    'crm.new-customers': 'New Clients',
    'crm.reminders': 'Refresher/Renewal Reminders',

    // Card 4: Revenue
    'rev.change': '+12% vs. last month',
    'rev.refresh': 'Refresher',
    'rev.new-armed': 'New Armed',
    'rev.professional': 'Professional Shooting',

    // Card 5: Instructors
    'shift.title': 'Work Schedule — Week 10/03',

    // Card 6: Reminders / notifications
    'notif1.title': 'Renewal Reminder',
    'notif1.body': 'Yossi, your license expires in 30 days',
    'notif2.title': "We miss you!",
    'notif2.body': "Haven't seen you in 60 days. 20% discount",
    'notif3.title': 'Appointment Tomorrow',
    'notif3.body': 'Danny, you have an appointment at 10:30',
    'notif4.title': 'Monthly Summary',
    'notif4.body': 'Activity report March 2026',

    // Card 7: More modules
    'mod.card7.center': 'Modules',

    // Sticky text blocks (left panel)
    'mod1.tag': 'Digital Shooter Log',
    'mod1.title': 'Stop writing everything in binders',
    'mod1.desc': 'Everything digital and stored in the cloud! Saved forever, ensuring 100% audit compliance. No room for errors.',
    'mod1.feat1': 'Auto-fill',
    'mod1.feat2': 'PDF Export',
    'mod1.feat3': 'Cloud Storage',

    'mod2.tag': 'Appointment Scheduling',
    'mod2.title': 'Clients book themselves. You stop answering the phone.',
    'mod2.desc': 'Clients book from their phone, receive automatic confirmation and reminders. Smart staffing, revenue forecasting, and zero surprises.',
    'mod2.feat1': 'Mobile Booking',
    'mod2.feat2': 'Auto Confirmation',
    'mod2.feat3': 'Reminders',

    'mod3.tag': 'Ammo Tracking',
    'mod3.title': 'Take control of your range ammunition',
    'mod3.desc': 'Ammo reports tracking every round fired. Everything ready to submit to the National Security Ministry.',
    'mod3.feat1': 'Live Inventory',
    'mod3.feat2': 'Low Stock Alerts',
    'mod3.feat3': 'Inspector Export',

    'mod4.tag': 'Client & Lead Management',
    'mod4.title': 'Know every client. No lead gets dropped.',
    'mod4.desc': 'Full CRM — details, history, preferences. New leads are captured and handled automatically.',
    'mod4.feat1': 'Full Profile',
    'mod4.feat2': 'Visit History',
    'mod4.feat3': 'Lead Management',

    'mod5.tag': 'Revenue & Reports',
    'mod5.title': 'Know exactly how much is coming in. And why.',
    'mod5.desc': 'Revenue dashboard, monthly reports, breakdown by instructor and service. Data-driven decisions.',
    'mod5.feat1': 'Live Dashboard',
    'mod5.feat2': 'Revenue Breakdown',
    'mod5.feat3': 'Report Export',

    'mod6.tag': 'Instructor Management',
    'mod6.title': 'Know who works, when, and how much',
    'mod6.desc': 'Instructor scheduling, weekly timetable, workload forecasting. Everything organized — for you and your instructors.',
    'mod6.feat1': 'Work Scheduling',
    'mod6.feat2': 'Hour Tracking',
    'mod6.feat3': 'Workload Forecast',

    'mod7.tag': 'Reminders & Campaigns',
    'mod7.title': "The client doesn't forget you. You don't forget them.",
    'mod7.desc': 'Automatic reminders, targeted campaigns, and follow-ups that bring clients back to the range.',
    'mod7.feat1': 'Auto SMS',
    'mod7.feat2': 'WhatsApp',
    'mod7.feat3': 'Campaigns',

    'mod8.tag': 'And Much More',
    'mod8.title': "And that's just the beginning. There's a lot more inside.",
    'mod8.desc': 'Digital signatures, lead management, targeted campaigns, advanced reports, success-based pricing, documents and templates — all included in one system.',
    'mod8.feat1': '15 Modules',
    'mod8.feat2': 'One System',
    'mod8.feat3': 'All Included',

    // FAQ
    'faq.tag': 'Frequently Asked Questions',
    'faq.title': 'Got Questions? We Have Answers.',
    'faq1.q': 'How much does the system cost?',
    'faq1.a': 'Currently, joining is free during the beta period. Payment is success-based — covering cloud, system, and messaging costs for your range. If we fail to bring people to your range, there is no need to pay.',
    'faq2.q': 'Is the system suitable for small ranges too?',
    'faq2.a': 'Absolutely. The system is built to scale — from a single-instructor range to a facility with dozens of instructors.',
    'faq3.q': 'What happens to my data?',
    'faq3.a': 'All information is stored in a secure cloud, backed up daily, and accessible only to you. We comply with all security standards.',
    'faq4.q': 'How long does it take to get started?',
    'faq4.a': "It depends on you. We're fully ready to go. We just need some technical details from you and can have the system up and running within a few days.",
    'faq5.q': 'Does the system meet National Security Ministry requirements?',
    'faq5.a': 'Yes. The system generates ammo reports and shooting logs in a format that meets all National Security Ministry requirements.',
    'faq6.q': 'Can I try it before committing?',
    'faq6.a': 'The shooter log can be tried directly on this page, with no sign-up required. To use the full system, registration is required. There is no free trial period, but payment is success-based only.',
    'faq7.q': 'Is there technical support?',
    'faq7.a': 'Absolutely. Our support team is available via WhatsApp, phone, and email. We guide you from day one.',
    'faq8.q': 'Where is my data stored?',
    'faq8.a': 'All data is stored in a secure cloud, backed up daily, and accessible at any time. Your data belongs to you — and we make sure it is always available.',
    'faq9.q': 'How secure is the system?',
    'faq9.a': 'The system is protected with end-to-end encryption, two-factor authentication, and automatic daily backups. Every access is logged and auditable. We comply with strict data security standards.',
    'faq10.q': 'Can I work from my phone?',
    'faq10.a': 'Absolutely. The system is fully mobile-optimized — fill shooter logs, manage appointments, and view reports directly from your smartphone, even on-site.',
    'faq11.q': 'What happens if I want to cancel?',
    'faq11.a': 'No commitment. You can cancel at any time. All your data can be fully exported before cancellation, so you lose nothing.',

    // CONTACT / CTA BOX
    'contact.title': 'Ready to Get Started?',
    'contact.sub': 'Join now and let your range work for you',
    'contact.form-title': 'Leave Your Details',
    'contact.form-sub': "We'll get in touch within 24 hours",
    'contact.label.name': 'Full Name',
    'contact.label.phone': 'Phone',
    'contact.label.range': 'Range Name',
    'contact.ph.name': 'John Smith',
    'contact.ph.phone': '050-1234567',
    'contact.ph.range': 'Your range name',
    'contact.btn.submit': 'Send',
    'contact.success.title': 'Thank You!',
    'contact.success.body': "We've received your details and will be in touch shortly.",
    'contact.guide-title': 'How Does It Work?',
    'contact.step1.title': 'Sign Up for Free',
    'contact.step1.desc': 'Create an account in under a minute. No credit card required.',
    'contact.step2.title': 'Set Up Your Range',
    'contact.step2.desc': 'Add instructors, configure operating hours, and customize for your range.',
    'contact.step3.title': 'Start Working',
    'contact.step3.desc': 'Clients book appointments, shooter logs fill automatically, reports are ready.',
    'contact.step4.title': 'Peace of Mind',
    'contact.step4.desc': 'Ministry inspection? Everything is ready. Ammo report? One click.',

    // FOOTER
    'footer.about': 'About',
    'footer.settings': 'Settings',
    'footer.share': 'Share with Friends',
    'footer.lang': 'עברית',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.accessibility': 'Accessibility Statement',
    'footer.contact': 'Contact',
    'footer.copy': '© 2026 Matara — All Rights Reserved',

    // ABOUT MODAL
    'about.logo': 'Matara',
    'about.title': 'About Matara',
    'about.p1': 'Matara is an advanced digital platform for managing shooting ranges, developed with a deep understanding of the daily needs of range operators in Israel.',
    'about.p2': 'The system provides a comprehensive solution with 15 modules — from digital shooter logs and ammo tracking, through instructor management and appointment scheduling, to analytics dashboards and advanced reports.',
    'about.p3': 'We believe range management should be simple, smart, and precise. Our system replaces manual forms, spreadsheets, and binders — centralizing everything in one place, with 100% compliance with Ministry of National Security requirements.',
    'about.h1': 'Modules',
    'about.h2': 'Regulatory Compliance',
    'about.h3': 'Access from Any Device',
    'about.cta': 'Want to learn more? Contact us and we\'ll be happy to give you a personal demo.',
    'about.btn': 'Contact Us',

    // WhatsApp float
    'wa.text': 'Chat with Us',
  }
};

let currentLang = localStorage.getItem('matara-lang') || 'he';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update document direction and language
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  document.documentElement.lang = lang;

  // Update page title
  document.title = t['page.title'] || document.title;

  // Update all [data-i18n] elements (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update all [data-i18n-html] elements (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all [data-i18n-ph] elements (placeholder)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update select options that have data-i18n-opt
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Rebuild mobile carousel if it exists (it clones HTML at init time)
  const mobCarousel = document.querySelector('.mob-carousel');
  if (mobCarousel) {
    mobCarousel.remove();
    // Re-trigger the mobile carousel initialization by dispatching a custom event
    window.dispatchEvent(new CustomEvent('i18n-rebuild-carousel'));
  }
}

function switchLang() {
  currentLang = currentLang === 'he' ? 'en' : 'he';
  localStorage.setItem('matara-lang', currentLang);
  applyLang(currentLang);
}

// Apply on page load
(function() {
  if (currentLang !== 'he') {
    applyLang(currentLang);
  }
})();
