const WHATSAPP_NUMBER = '919448121829';

const PRODUCT_META = [
  { img:'assets/install-solar-etc.jpg', brand:'Redsun', width:1024, height:576, group:'hot' },
  { img:'assets/redsun-heatpump.jpg', brand:'Redsun', width:696, height:480, group:'hot' },
  { img:'assets/racold-heater.jpg', brand:'Racold', width:447, height:447, group:'hot' },
  { img:'assets/vguard-gas.jpg', brand:'V-Guard', width:460, height:1024, group:'hot' },
  { img:'assets/water-softener.jpg', brand:'Zero B', width:1000, height:639, group:'water' },
  { img:'assets/zerob-ro.jpg', brand:'Zero B', width:447, height:447, group:'water' },
  { img:'assets/pressure-pump.jpg', brand:'Booster Pump', width:705, height:1024, group:'water' },
  { img:'assets/exide-power.jpg', brand:'Exide', width:964, height:964, group:'power' },
  { img:'assets/solar-home.jpg', brand:'V-Guard', width:716, height:428, group:'power' }
];

const PROJECT_META = [
  { img:'assets/install-solar-etc.jpg', width:1024, height:576 },
  { img:'assets/install-solar-fpc.jpg', width:1024, height:473 },
  { img:'assets/install-heatpump.jpg', width:1024, height:461 }
];

const REVIEW_META = [
  { initial:'R', name:'Ramesh K.' },
  { initial:'S', name:'Suresh Patil' },
  { initial:'L', name:'Lakshmi Devi' }
];

const UI = {
  en:{skip:'Skip to main content',language:'Select language',menuOpen:'Open menu',menuClose:'Close menu',all:'All solutions',hot:'Hot water',water:'Water care & pressure',power:'Solar & power',established:'Established',categories:'Solution categories',support:'Sales to service',serving:'Serving Karnataka',since:"SINCE '01",realWork:'Real installation',selectedBrands:'Selected solutions from',projectPrompt:'Planning something similar for your property?',storyQuote:'Right product. Neat installation. Support that stays.',proprietor:'Proprietor · Chitradurga',serviceLead:'One experienced team—from the first site visit to installation and long-term support.',testimonialLead:'Built on careful work, clear guidance and service customers can return to.',formNote:'Tell us what you need. Your details open securely in WhatsApp.',footerPrompt:'Need expert guidance for your property?',viewProject:'View project',opening:'Opening WhatsApp with your enquiry…',popupBlocked:'Please allow pop-ups, or message us directly on WhatsApp.',enquiry:'Product enquiry'},
  kn:{skip:'ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ',language:'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',menuOpen:'ಮೆನು ತೆರೆಯಿರಿ',menuClose:'ಮೆನು ಮುಚ್ಚಿರಿ',all:'ಎಲ್ಲಾ ಪರಿಹಾರಗಳು',hot:'ಬಿಸಿ ನೀರು',water:'ನೀರಿನ ಆರೈಕೆ ಮತ್ತು ಒತ್ತಡ',power:'ಸೌರ ಮತ್ತು ಪವರ್',established:'ಸ್ಥಾಪನೆ',categories:'ಪರಿಹಾರ ವರ್ಗಗಳು',support:'ಮಾರಾಟದಿಂದ ಸೇವೆವರೆಗೆ',serving:'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸೇವೆ',since:"2001 ರಿಂದ",realWork:'ನೈಜ ಅಳವಡಿಕೆ',selectedBrands:'ಆಯ್ದ ಪರಿಹಾರಗಳು',projectPrompt:'ನಿಮ್ಮ ಆಸ್ತಿಗೆ ಇದೇ ರೀತಿಯ ಯೋಜನೆ ಬೇಕೇ?',storyQuote:'ಸರಿಯಾದ ಉತ್ಪನ್ನ. ಅಚ್ಚುಕಟ್ಟಾದ ಅಳವಡಿಕೆ. ನಿರಂತರ ಬೆಂಬಲ.',proprietor:'ಮಾಲೀಕರು · ಚಿತ್ರದುರ್ಗ',serviceLead:'ಮೊದಲ ಸೈಟ್ ಭೇಟಿಯಿಂದ ಅಳವಡಿಕೆ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಬೆಂಬಲದವರೆಗೆ ಒಂದೇ ಅನುಭವಿ ತಂಡ.',testimonialLead:'ಜಾಗರೂಕ ಕೆಲಸ, ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆ.',formNote:'ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ತಿಳಿಸಿ. ನಿಮ್ಮ ವಿವರಗಳು ಸುರಕ್ಷಿತವಾಗಿ WhatsApp ನಲ್ಲಿ ತೆರೆಯುತ್ತವೆ.',footerPrompt:'ನಿಮ್ಮ ಆಸ್ತಿಗೆ ತಜ್ಞ ಮಾರ್ಗದರ್ಶನ ಬೇಕೇ?',viewProject:'ಯೋಜನೆ ನೋಡಿ',opening:'ನಿಮ್ಮ ವಿಚಾರಣೆಯೊಂದಿಗೆ WhatsApp ತೆರೆಯಲಾಗುತ್ತಿದೆ…',popupBlocked:'ದಯವಿಟ್ಟು ಪಾಪ್-ಅಪ್ ಅನುಮತಿಸಿ ಅಥವಾ ನೇರವಾಗಿ WhatsApp ಮಾಡಿ.',enquiry:'ಉತ್ಪನ್ನ ವಿಚಾರಣೆ'},
  hi:{skip:'मुख्य सामग्री पर जाएं',language:'भाषा चुनें',menuOpen:'मेनू खोलें',menuClose:'मेनू बंद करें',all:'सभी समाधान',hot:'गर्म पानी',water:'वॉटर केयर और प्रेशर',power:'सोलर और पावर',established:'स्थापना',categories:'समाधान श्रेणियाँ',support:'बिक्री से सेवा तक',serving:'कर्नाटक में सेवा',since:"2001 से",realWork:'वास्तविक इंस्टॉलेशन',selectedBrands:'चुनिंदा समाधान',projectPrompt:'अपनी प्रॉपर्टी के लिए ऐसा ही प्रोजेक्ट चाहते हैं?',storyQuote:'सही उत्पाद। साफ इंस्टॉलेशन। भरोसेमंद सहायता।',proprietor:'मालिक · चित्रदुर्ग',serviceLead:'पहली साइट विज़िट से इंस्टॉलेशन और दीर्घकालीन सहायता तक एक अनुभवी टीम।',testimonialLead:'सावधानी से किए काम, स्पष्ट मार्गदर्शन और भरोसेमंद सेवा पर निर्मित।',formNote:'हमें अपनी जरूरत बताएं। आपकी जानकारी सुरक्षित रूप से WhatsApp में खुलेगी।',footerPrompt:'अपनी प्रॉपर्टी के लिए विशेषज्ञ मार्गदर्शन चाहिए?',viewProject:'प्रोजेक्ट देखें',opening:'आपकी पूछताछ के साथ WhatsApp खुल रहा है…',popupBlocked:'पॉप-अप की अनुमति दें या हमें सीधे WhatsApp करें।',enquiry:'उत्पाद पूछताछ'},
  te:{skip:'ప్రధాన కంటెంట్‌కు వెళ్లండి',language:'భాషను ఎంచుకోండి',menuOpen:'మెను తెరవండి',menuClose:'మెను మూసివేయండి',all:'అన్ని పరిష్కారాలు',hot:'వేడి నీరు',water:'నీటి సంరక్షణ & ప్రెషర్',power:'సోలార్ & పవర్',established:'స్థాపన',categories:'పరిష్కార విభాగాలు',support:'అమ్మకాల నుండి సేవ వరకు',serving:'కర్ణాటకలో సేవలు',since:"2001 నుండి",realWork:'నిజమైన ఇన్‌స్టాలేషన్',selectedBrands:'ఎంచుకున్న పరిష్కారాలు',projectPrompt:'మీ ప్రాపర్టీకి ఇలాంటి ప్రాజెక్ట్ కావాలా?',storyQuote:'సరైన ఉత్పత్తి. చక్కటి ఇన్‌స్టాలేషన్. నిరంతర మద్దతు.',proprietor:'యజమాని · చిత్రదుర్గ',serviceLead:'మొదటి సైట్ విజిట్ నుండి ఇన్‌స్టాలేషన్ మరియు దీర్ఘకాలిక మద్దతు వరకు ఒకే అనుభవజ్ఞులైన బృందం.',testimonialLead:'జాగ్రత్త పని, స్పష్టమైన మార్గదర్శకత్వం మరియు నమ్మకమైన సేవ.',formNote:'మీ అవసరాన్ని తెలియజేయండి. మీ వివరాలు సురక్షితంగా WhatsAppలో తెరవబడతాయి.',footerPrompt:'మీ ప్రాపర్టీకి నిపుణుల మార్గదర్శకత్వం కావాలా?',viewProject:'ప్రాజెక్ట్ చూడండి',opening:'మీ విచారణతో WhatsApp తెరవబడుతోంది…',popupBlocked:'దయచేసి పాప్-అప్‌లను అనుమతించండి లేదా నేరుగా WhatsApp చేయండి.',enquiry:'ఉత్పత్తి విచారణ'},
  ta:{skip:'முக்கிய உள்ளடக்கத்திற்குச் செல்லவும்',language:'மொழியைத் தேர்ந்தெடுக்கவும்',menuOpen:'மெனுவைத் திறக்கவும்',menuClose:'மெனுவை மூடவும்',all:'அனைத்து தீர்வுகள்',hot:'சூடான நீர்',water:'நீர் பராமரிப்பு & அழுத்தம்',power:'சோலார் & பவர்',established:'நிறுவப்பட்டது',categories:'தீர்வு வகைகள்',support:'விற்பனை முதல் சேவை வரை',serving:'கர்நாடகாவில் சேவை',since:"2001 முதல்",realWork:'உண்மையான நிறுவல்',selectedBrands:'தேர்ந்தெடுத்த தீர்வுகள்',projectPrompt:'உங்கள் சொத்துக்கு இதுபோன்ற திட்டம் வேண்டுமா?',storyQuote:'சரியான தயாரிப்பு. நேர்த்தியான நிறுவல். தொடரும் ஆதரவு.',proprietor:'உரிமையாளர் · சித்ரதுர்கா',serviceLead:'முதல் தள வருகை முதல் நிறுவல் மற்றும் நீண்டகால ஆதரவு வரை ஒரே அனுபவமிக்க குழு.',testimonialLead:'கவனமான பணி, தெளிவான வழிகாட்டுதல் மற்றும் நம்பகமான சேவை.',formNote:'உங்கள் தேவையைத் தெரிவிக்கவும். உங்கள் விவரங்கள் பாதுகாப்பாக WhatsAppல் திறக்கும்.',footerPrompt:'உங்கள் சொத்துக்கு நிபுணர் வழிகாட்டுதல் வேண்டுமா?',viewProject:'திட்டத்தைப் பார்க்கவும்',opening:'உங்கள் விசாரணையுடன் WhatsApp திறக்கப்படுகிறது…',popupBlocked:'பாப்-அப்களை அனுமதிக்கவும் அல்லது நேரடியாக WhatsApp செய்யவும்.',enquiry:'தயாரிப்பு விசாரணை'}
};

let currentLang = 'en';
let activeFilter = 'all';

const getPath = (object, path) => path.split('.').reduce((value, key) => value == null ? undefined : value[key], object);
const waLink = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function translatePage(T, U) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = getPath(T, element.dataset.i18n);
    if (value == null) return;
    if (element.hasAttribute('data-i18n-html')) element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll('[data-ui]').forEach(element => {
    const value = U[element.dataset.ui];
    if (value != null) element.textContent = value;
  });
}

function renderFilters(U) {
  const filters = [['all',U.all],['hot',U.hot],['water',U.water],['power',U.power]];
  document.getElementById('solutionFilters').innerHTML = filters.map(([key,label]) =>
    `<button class="filter-button${activeFilter === key ? ' active' : ''}" type="button" data-filter="${key}" aria-pressed="${activeFilter === key}">${label}</button>`
  ).join('');
}

function renderProducts(T, U) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = PRODUCT_META.map((meta, index) => {
    const item = T.products.items[index];
    const hidden = activeFilter !== 'all' && activeFilter !== meta.group;
    const message = `${U.enquiry}: ${item.name} (${meta.brand})`;
    return `<article class="product-card${hidden ? ' is-hidden' : ''}" data-group="${meta.group}" style="transition-delay:${(index % 3) * 50}ms">
      <div class="product-card__media">
        <img src="${meta.img}" alt="${item.name} — ${meta.brand}" width="${meta.width}" height="${meta.height}" loading="lazy">
        <span class="product-card__number">${String(index + 1).padStart(2,'0')}</span>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta"><span>${meta.brand}</span><span>${item.tag}</span></div>
        <h3>${item.name}</h3><p>${item.desc}</p>
        <a class="product-card__link" href="${waLink(message)}" target="_blank" rel="noopener"><span>${T.products.enquire}</span><i aria-hidden="true">↗</i></a>
      </div>
    </article>`;
  }).join('');
}

function renderProjects(T, U) {
  document.getElementById('projectGrid').innerHTML = PROJECT_META.map((meta,index) => {
    const item = T.gallery.items[index];
    return `<button class="project-card" type="button" data-project="${index}" aria-label="${U.viewProject}: ${item.title}" style="transition-delay:${index * 70}ms">
      <img src="${meta.img}" alt="${item.title} — ${item.sub}" width="${meta.width}" height="${meta.height}" loading="lazy">
      <span class="project-card__view" aria-hidden="true">↗</span>
      <span class="project-card__content"><span>${U.realWork} · 0${index + 1}</span><h3>${item.title}</h3><p>${item.sub}</p></span>
    </button>`;
  }).join('');
}

function renderCommitments(T) {
  document.getElementById('commitmentGrid').innerHTML = T.commitments.slice(0,6).map(item => `<div class="commitment"><i aria-hidden="true">✓</i><span>${item}</span></div>`).join('');
}

function renderServices(T) {
  const journeyIndexes = [4,6,1,8];
  document.getElementById('journeyGrid').innerHTML = journeyIndexes.map((itemIndex,index) => {
    const item = T.services.items[itemIndex];
    return `<li class="journey-step" style="transition-delay:${index * 80}ms"><span class="journey-step__number">0${index + 1}</span><h3>${item.name}</h3><p>${item.desc}</p></li>`;
  }).join('');
  const serviceIndexes = [0,1,2,3,7,8];
  document.getElementById('serviceGrid').innerHTML = serviceIndexes.map((itemIndex,index) => {
    const item = T.services.items[itemIndex];
    return `<article class="service-card" style="transition-delay:${(index % 3) * 55}ms"><span>0${index + 1}</span><h3>${item.name}</h3><p>${item.desc}</p></article>`;
  }).join('');
}

function renderSectors(T) {
  document.getElementById('sectorGrid').innerHTML = T.industries.items.map(item => `<span class="sector-chip">${item}</span>`).join('');
}

function renderReviews(T) {
  document.getElementById('reviewGrid').innerHTML = REVIEW_META.map((meta,index) => {
    const item = T.reviews.items[index];
    return `<article class="testimonial-card" style="transition-delay:${index * 70}ms"><div class="testimonial-stars" aria-hidden="true">★★★★★</div><blockquote>“${item.t}”</blockquote><div class="testimonial-person"><span class="testimonial-avatar">${meta.initial}</span><span><strong>${meta.name}</strong><small>${item.role}</small></span></div></article>`;
  }).join('');
}

function renderForm(T) {
  const select = document.getElementById('cService');
  const previous = select.value;
  select.innerHTML = T.contact.options.map(option => `<option value="${option}">${option}</option>`).join('');
  if ([...select.options].some(option => option.value === previous)) select.value = previous;
  document.getElementById('cName').placeholder = T.contact.name;
  document.getElementById('cPhone').placeholder = '+91 00000 00000';
  document.getElementById('cMsg').placeholder = T.contact.message;
}

function renderDynamic(T, U) {
  renderFilters(U);renderProducts(T,U);renderProjects(T,U);renderCommitments(T);renderServices(T);renderSectors(T);renderReviews(T);renderForm(T);
  requestAnimationFrame(() => document.body.classList.add('content-ready'));
}

function applyLanguage(lang) {
  const T = window.TRANSLATIONS?.[lang] || window.TRANSLATIONS?.en;
  if (!T) return;
  currentLang = window.TRANSLATIONS[lang] ? lang : 'en';
  const U = UI[currentLang] || UI.en;
  document.documentElement.lang = currentLang;
  document.documentElement.dataset.lang = currentLang;
  translatePage(T,U);
  renderDynamic(T,U);
  const whatsappMessages = {
    quote: T.hero.quote,
    project: T.gallery.cta,
    help: T.about.btn
  };
  document.querySelectorAll('[data-wa]').forEach(link => {
    link.href = waLink(whatsappMessages[link.dataset.wa] || T.hero.quote);
  });
  const select = document.getElementById('langSelect');
  if (select) select.value = currentLang;
  const toggle = document.getElementById('menuToggle');
  toggle.setAttribute('aria-label',toggle.getAttribute('aria-expanded') === 'true' ? U.menuClose : U.menuOpen);
  document.getElementById('navScrim').setAttribute('aria-label',U.menuClose);
  document.getElementById('dialogClose').setAttribute('aria-label',U.menuClose);
  try { localStorage.setItem('siteLang',currentLang); } catch (_) {}
}

(function initializeLanguage() {
  const select = document.getElementById('langSelect');
  select.innerHTML = Object.entries(window.LANGS || {en:'English'}).map(([code,label]) => `<option value="${code}">${label}</option>`).join('');
  select.addEventListener('change',() => applyLanguage(select.value));
  let saved = 'en';
  try { saved = localStorage.getItem('siteLang') || 'en'; } catch (_) {}
  applyLanguage(window.TRANSLATIONS?.[saved] ? saved : 'en');
})();

const nav = document.getElementById('primaryNav');
const menuToggle = document.getElementById('menuToggle');
const navScrim = document.getElementById('navScrim');
function setMenu(open, restoreFocus = false) {
  const U = UI[currentLang] || UI.en;
  const wasOpen = nav.classList.contains('open');
  nav.classList.toggle('open',open);menuToggle.classList.toggle('open',open);navScrim.classList.toggle('show',open);document.body.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open ? U.menuClose : U.menuOpen);
  if (open) nav.querySelector('a')?.focus();
  else if (wasOpen && restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click',() => setMenu(!nav.classList.contains('open'),true));
navScrim.addEventListener('click',() => setMenu(false,true));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',() => setMenu(false,false)));
document.addEventListener('keydown',event => {
  if (event.key === 'Tab' && nav.classList.contains('open')) {
    const focusable = [...nav.querySelectorAll('a[href]')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault();last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault();first.focus(); }
  }
  if (event.key !== 'Escape') return;
  setMenu(false,true);
  if (document.getElementById('projectDialog').open) document.getElementById('projectDialog').close();
});

const filters = document.getElementById('solutionFilters');
filters.addEventListener('click',event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll('button').forEach(item => { const active = item === button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active)); });
  document.querySelectorAll('.product-card').forEach(card => card.classList.toggle('is-hidden',activeFilter !== 'all' && card.dataset.group !== activeFilter));
});

const projectDialog = document.getElementById('projectDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogTitle = document.getElementById('dialogTitle');
const dialogText = document.getElementById('dialogText');
document.getElementById('projectGrid').addEventListener('click',event => {
  const card = event.target.closest('[data-project]');
  if (!card) return;
  const index = Number(card.dataset.project);
  const T = window.TRANSLATIONS[currentLang];
  dialogImage.src = PROJECT_META[index].img;dialogImage.alt = T.gallery.items[index].title;dialogTitle.textContent = T.gallery.items[index].title;dialogText.textContent = T.gallery.items[index].sub;
  projectDialog.showModal();
});
document.getElementById('dialogClose').addEventListener('click',() => projectDialog.close());
projectDialog.addEventListener('click',event => { if (event.target === projectDialog) projectDialog.close(); });

const enquiryForm = document.getElementById('enquiryForm');
enquiryForm.addEventListener('submit',event => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const U = UI[currentLang] || UI.en;
  const T = window.TRANSLATIONS[currentLang];
  const lines = [
    `*${T.contact.formTitle} — Sri Annapurneshwari Electricals*`,'',
    `*${T.contact.name}:* ${document.getElementById('cName').value.trim()}`,
    `*${T.contact.phone}:* ${document.getElementById('cPhone').value.trim()}`,
    `*${T.contact.interested}:* ${document.getElementById('cService').value}`
  ];
  const message = document.getElementById('cMsg').value.trim();
  if (message) lines.push(`*${T.contact.message}:* ${message}`);
  window.open(waLink(lines.join('\n')),'_blank','noopener,noreferrer');
  const status = document.getElementById('formStatus');
  status.textContent = U.opening;
  enquiryForm.reset();
  window.setTimeout(() => { status.textContent = ''; },5000);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window && Element.prototype.animate) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:620,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'}
    );
    observer.unobserve(entry.target);
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(element => {
    if (!element.closest('.hero')) observer.observe(element);
  });
}

const siteHeader = document.getElementById('siteHeader');
const progress = document.getElementById('pageProgress');
const navLinks = [...document.querySelectorAll('.primary-nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
let ticking = false;
function updateOnScroll() {
  const y = window.scrollY;
  siteHeader.classList.toggle('scrolled',y > 8);
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${scrollable > 0 ? Math.min(100,(y / scrollable) * 100) : 0}%`;
  let current = '';
  sections.forEach(section => { if (y >= section.offsetTop - 150) current = section.id; });
  navLinks.forEach(link => link.classList.toggle('active',link.hash === `#${current}`));
  ticking = false;
}
window.addEventListener('scroll',() => { if (!ticking) { requestAnimationFrame(updateOnScroll);ticking = true; } },{passive:true});
updateOnScroll();
document.getElementById('year').textContent = new Date().getFullYear();
