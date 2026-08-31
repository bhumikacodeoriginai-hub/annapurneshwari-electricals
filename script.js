/* ============ CONFIG ============ */
const WHATSAPP_NUMBER = "919448121829"; // +91 94481 21829

/* ============ ICONS ============ */
const I = {
  solar:'<path d="M4 3h16l2 9H2L4 3zm-.6 11h17.2l-1 3H4.4l-1-3zM7 19h10v2H7v-2z"/>',
  heater:'<path d="M12 2a5 5 0 0 0-5 5v6.1a5 5 0 1 0 10 0V7a5 5 0 0 0-5-5zm0 18a3 3 0 0 1-1-5.8V7a1 1 0 1 1 2 0v7.2A3 3 0 0 1 12 20z"/>',
  pump:'<path d="M12 2C7 2 3 6 3 11c0 4 2.5 7 6 8v1h6v-1c3.5-1 6-4 6-8 0-5-4-9-9-9zm0 4a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V6z"/>',
  ups:'<path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6l1 3h2v2H7v-2h2l1-3H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm9 3-4 5h2v3l4-5h-2V7z"/>',
  battery:'<path d="M15 4h-2V2h-2v2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 9h-1.2l.7 3-3.5-4h2l-.7-3 3.7 4z"/>',
  car:'<path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v5h-2v2h-2v-2H7v2H5v-2H3v-5a1 1 0 0 1 1-1h1zm2.2-.5h9.6l-1-3H8.2l-1 3zM7 14a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 7 14zm10 0a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 17 14z"/>',
  plug:'<path d="M14 2v6h-2V2h2zM8 2v6H6V2h2zm-3 8h14v3a7 7 0 0 1-6 6.9V22h-2v-2.1A7 7 0 0 1 5 13v-3z"/>',
  sales:'<path d="M7 4h13l-1.5 9H8.5L7 4zM6 2H2v2h2l1 12h13v-2H6.8l-.3-2H20L22 4H5.7L5.3 2H6zM9 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
  install:'<path d="M22 7.6 16.4 2 14 4.4l1 1-9 9-1-1L2 15.8 8.2 22 11 19.2l-1-1 9-9 1 1L22 7.6zM8.2 19.2 5 16l.6-.6 3.2 3.2-.6.6z"/>',
  amc:'<path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6z"/>',
  repair:'<path d="M21 3a4 4 0 0 1-5.3 5.3l-8 8L5 14l8-8A4 4 0 0 1 18.3 3H21zM3.5 18.5a2.1 2.1 0 1 1 3 3 2.1 2.1 0 0 1-3-3z"/>',
  survey:'<path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>',
  consult:'<path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 5v2h10V9H7zm0 4v2h7v-2H7z"/>',
  project:'<path d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h8v8H3v-8zm10 3h8v5h-8v-5z"/>',
  warranty:'<path d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4zm-1 14-3.5-3.5L9 10l2 2 4-4 1.5 1.4L11 15z"/>',
  home:'<path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z"/>',
  apartment:'<path d="M3 21V3h10v6h8v12H3zm2-2h6V5H5v14zm8 0h6v-8h-6v8zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z"/>',
  school:'<path d="M12 3 1 8l11 5 9-4.1V15h2V8L12 3zM4 12.3V16c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.7l-8 3.6-8-3.6z"/>',
  hospital:'<path d="M6 2h12v20H6V2zm5 4v3H8v2h3v3h2v-3h3V9h-3V6h-2z"/>',
  hotel:'<path d="M2 4h2v9h8V7h6a4 4 0 0 1 4 4v9h-2v-3H4v3H2V4zm4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  building:'<path d="M4 2h11v20H4V2zm13 6h3v14h-3V8zM7 5v2h2V5H7zm4 0v2h2V5h-2zM7 9v2h2V9H7zm4 0v2h2V9h-2zm-4 4v2h2v-2H7zm4 0v2h2v-2h-2z"/>',
  factory:'<path d="M2 22V8l6 4V8l6 4V8l6 4v10H2zm4-6v2h3v-2H6zm6 0v2h3v-2h-3z"/>',
  industry:'<path d="M22 22H2V10l6 3V10l6 3V4h2v9l6-3v12zM6 16v3h3v-3H6zm6 0v3h3v-3h-3z"/>',
  gov:'<path d="M12 2 2 7v2h20V7L12 2zM4 10v8H2v2h20v-2h-2v-8h-2v8h-3v-8h-2v8H8v-8H6v8H4z"/>',
  star:'<path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2 2 9.4l7-.9L12 2z"/>',
  check:'<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>',
  price:'<path d="M2 12 12 2h9v9L11 21 2 12zm15-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
  support:'<path d="M12 2a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h1v-8H6v-1a6 6 0 0 1 12 0v1h-2v8h1a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8z"/>',
  handshake:'<path d="m12 5 2-1.5 6 4.5v9l-3-1-4-4 1-1-2-2-2 2 1 1-3 3-3-2V8l6-4.5L12 5z"/>',
  wa:'<path d="M17.5 14.4c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2z"/>'
};
const svg = (p)=>`<svg viewBox="0 0 24 24">${I[p]||I.check}</svg>`;
const waSvg = `<svg viewBox="0 0 24 24">${I.wa}</svg>`;

/* ============ STRUCTURAL META (language-independent) ============ */
const productMeta = [
  {img:'assets/install-solar-etc.jpg', brand:'Redsun'},
  {img:'assets/redsun-heatpump.jpg',   brand:'Redsun'},
  {img:'assets/racold-heater.jpg',     brand:'Racold'},
  {img:'assets/vguard-gas.jpg',        brand:'V-Guard'},
  {img:'assets/water-softener.jpg',    brand:'Zero B'},
  {img:'assets/zerob-ro.jpg',          brand:'Zero B'},
  {img:'assets/pressure-pump.jpg',     brand:'Booster Pump'},
  {img:'assets/exide-power.jpg',       brand:'Exide'},
  {img:'assets/solar-home.jpg',        brand:'V-Guard'}
];
const galleryMeta = ['assets/install-solar-etc.jpg','assets/install-solar-fpc.jpg','assets/install-heatpump.jpg','assets/solar-home.jpg'];
const serviceIcons  = ['sales','install','amc','repair','survey','battery','consult','project','warranty'];
const industryIcons = ['home','apartment','school','hospital','hotel','building','factory','industry','gov'];
const whyIcons      = ['star','check','install','support','price','project','home','amc','warranty','handshake'];
const reviewMeta    = [{a:'R',n:'Ramesh K.'},{a:'S',n:'Suresh Patil'},{a:'L',n:'Lakshmi Devi'}];
const starRow = ('<svg viewBox="0 0 24 24">'+I.star+'</svg>').repeat(5);

/* ============ i18n ENGINE ============ */
function getPath(obj, path){ return path.split('.').reduce((o,k)=> (o==null ? undefined : o[k]), obj); }

function translateStatic(T){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = getPath(T, el.getAttribute('data-i18n'));
    if(v==null) return;
    if(el.hasAttribute('data-i18n-html')) el.innerHTML = v;
    else el.textContent = v;
  });
}

function waLink(msg){ return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`; }

function renderDynamic(T){
  // Marquee (duplicated for seamless loop)
  const mq = T.marquee.map(m=>`<span>${m}</span><i></i>`).join('');
  document.getElementById('marqueeTrack').innerHTML = mq + mq;

  // Commitments
  document.getElementById('commitGrid').innerHTML = T.commitments.map(c=>
    `<div class="commit"><span>${svg('check')}</span>${c}</div>`).join('');

  // Products
  document.getElementById('productGrid').innerHTML = productMeta.map((m,i)=>{
    const it = T.products.items[i];
    const msg = `Enquiry: ${it.name} (${m.brand})`;
    return `<div class="pcard reveal" style="transition-delay:${i*55}ms">
      <div class="pcard__media">
        <img src="${m.img}" alt="${it.name} - ${m.brand}" loading="lazy" />
        <span class="pcard__tag">${it.tag}</span>
      </div>
      <div class="pcard__body">
        <span class="pcard__brand">${m.brand}</span>
        <h3>${it.name}</h3>
        <p>${it.desc}</p>
        <a class="pcard__link" href="${waLink(msg)}" target="_blank" rel="noopener">${T.products.enquire}${waSvg}</a>
      </div>
    </div>`;
  }).join('');

  // Gallery
  document.getElementById('galleryGrid').innerHTML = galleryMeta.map((img,i)=>{
    const it = T.gallery.items[i];
    return `<div class="gitem reveal" style="transition-delay:${i*80}ms">
      <img src="${img}" alt="${it.title} - ${it.sub}" loading="lazy" />
      <div class="gitem__overlay"><h4>${it.title}</h4><p>${it.sub}</p></div>
    </div>`;
  }).join('');

  // Services
  document.getElementById('serviceGrid').innerHTML = serviceIcons.map((ic,i)=>{
    const it = T.services.items[i];
    return `<div class="service reveal" style="transition-delay:${i*50}ms">
      <div class="service__ico">${svg(ic)}</div>
      <div><h4>${it.name}</h4><p>${it.desc}</p></div>
    </div>`;
  }).join('');

  // Industries
  document.getElementById('industryGrid').innerHTML = industryIcons.map((ic,i)=>
    `<div class="chip reveal" style="transition-delay:${i*40}ms">${svg(ic)}<span>${T.industries.items[i]}</span></div>`).join('');

  // Why
  document.getElementById('whyGrid').innerHTML = whyIcons.map((ic,i)=>
    `<div class="why-item reveal" style="transition-delay:${i*45}ms">
      <div class="why-item__ico">${svg(ic)}</div><h4>${T.why.items[i]}</h4>
    </div>`).join('');

  // Reviews
  document.getElementById('reviewGrid').innerHTML = reviewMeta.map((rm,i)=>{
    const it = T.reviews.items[i];
    return `<div class="review reveal" style="transition-delay:${i*80}ms">
      <div class="review__stars">${starRow}</div>
      <p class="review__text">&ldquo;${it.t}&rdquo;</p>
      <div class="review__person">
        <div class="review__avatar">${rm.a}</div>
        <div><div class="review__name">${rm.n}</div><div class="review__role">${it.role}</div></div>
      </div>
    </div>`;
  }).join('');

  // Contact form: options + placeholders
  const sel = document.getElementById('cService');
  if(sel){
    const prev = sel.selectedIndex;
    sel.innerHTML = T.contact.options.map(o=>`<option>${o}</option>`).join('');
    if(prev>=0 && prev<sel.options.length) sel.selectedIndex = prev;
  }
  const ph = (id,val)=>{ const e=document.getElementById(id); if(e) e.placeholder=val; };
  ph('cName', T.contact.name);
  ph('cPhone', T.contact.phone);
  ph('cMsg', T.contact.message);
}

function revealDynamicNow(){
  document.querySelectorAll('#productGrid .reveal, #galleryGrid .reveal, #serviceGrid .reveal, #industryGrid .reveal, #whyGrid .reveal, #reviewGrid .reveal')
    .forEach(e=>e.classList.add('in'));
}

let currentLang = 'en';
function applyLanguage(lang, initial){
  const T = (typeof TRANSLATIONS!=='undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : (typeof TRANSLATIONS!=='undefined' ? TRANSLATIONS.en : null);
  if(!T) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  translateStatic(T);
  renderDynamic(T);
  if(!initial) revealDynamicNow();
  const sel = document.getElementById('langSelect');
  if(sel) sel.value = lang;
  try{ localStorage.setItem('siteLang', lang); }catch(e){}
}

/* ============ INIT LANGUAGE ============ */
(function initLang(){
  const sel = document.getElementById('langSelect');
  if(sel && typeof LANGS!=='undefined'){
    sel.innerHTML = Object.keys(LANGS).map(code=>`<option value="${code}">${LANGS[code]}</option>`).join('');
    sel.addEventListener('change', ()=> applyLanguage(sel.value, false));
  }
  let saved = 'en';
  try{ saved = localStorage.getItem('siteLang') || 'en'; }catch(e){}
  if(typeof TRANSLATIONS==='undefined' || !TRANSLATIONS[saved]) saved = 'en';
  applyLanguage(saved, true);
})();

/* ============ PRELOADER ============ */
window.addEventListener('load',()=>{
  const pre = document.getElementById('preloader');
  if(pre) setTimeout(()=>pre.classList.add('hide'),500);
});
setTimeout(()=>{const p=document.getElementById('preloader');if(p)p.classList.add('hide')},2500);

/* ============ NAV TOGGLE ============ */
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.classList.toggle('open')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.classList.remove('open')}));

/* ============ WHATSAPP ENQUIRY FORM ============ */
document.getElementById('enquiryForm').addEventListener('submit',function(e){
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const service = document.getElementById('cService').value;
  const msg = document.getElementById('cMsg').value.trim();
  let text = `*New Enquiry — Sri Annapurneshwari Electricals*%0A%0A`;
  text += `*Name:* ${encodeURIComponent(name)}%0A`;
  text += `*Phone:* ${encodeURIComponent(phone)}%0A`;
  text += `*Interested In:* ${encodeURIComponent(service)}%0A`;
  if(msg) text += `*Message:* ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,'_blank');
  const status = document.getElementById('formStatus');
  status.textContent = 'Opening WhatsApp — we\'ll reply shortly!';
  this.reset();
  setTimeout(()=>status.textContent='',5000);
});

/* ============ COUNTER ANIMATION ============ */
function animateCount(el){
  const target = +el.dataset.count; const dur = 1500; const start = performance.now();
  function step(now){
    const prog = Math.min((now-start)/dur,1);
    const eased = 1-Math.pow(1-prog,3);
    el.textContent = Math.floor(eased*target).toLocaleString();
    if(prog<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ============ INTERSECTION OBSERVER (reveal + counters) ============ */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('in');
      if(en.target.dataset.count!==undefined) animateCount(en.target);
      io.unobserve(en.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal,[data-count]').forEach(el=>io.observe(el));

/* ============ HEADER + PROGRESS + BACK-TO-TOP + ACTIVE NAV ============ */
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');
const progress = document.getElementById('scrollProgress');
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav__link')];

window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  header.classList.toggle('scrolled', y>10);
  toTop.classList.toggle('show', y>500);
  if(progress){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h>0 ? (y/h*100) : 0) + '%';
  }
  let current = '';
  sections.forEach(s=>{ if(y >= s.offsetTop-120) current = s.id; });
  navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+current));
},{passive:true});

toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ ROBUST EMAIL LINKS ============ */
(function(){
  const EMAIL = 'nlokesh29@rediffmail.com';
  const SUBJECT = 'Enquiry - Electrical & Solar Solutions';
  const BODY = 'Hello Sri Annapurneshwari Electricals,\n\nI am interested in your products/services. Please contact me.\n\nName:\nPhone:\nLocation:';
  const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL) +
                '&su=' + encodeURIComponent(SUBJECT) + '&body=' + encodeURIComponent(BODY);
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  let toastEl;
  function toast(msg){
    if(!toastEl){ toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(()=>toastEl.classList.remove('show'), 4000);
  }
  document.querySelectorAll('.email-link').forEach(a=>{
    a.addEventListener('click', function(e){
      if(isMobile) return;
      e.preventDefault();
      window.open(gmail, '_blank', 'noopener');
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(EMAIL).then(()=>toast('Opening Gmail… email copied: ' + EMAIL), ()=>toast('Opening Gmail compose…'));
      } else { toast('Opening Gmail compose…'); }
    });
  });
})();

/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();
