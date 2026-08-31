/* ============ CONFIG ============ */
const WHATSAPP_NUMBER = "919448121829"; // +91 94481 21829

/* ============ ICONS (inline SVG paths) ============ */
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
  gov:'<path d="M12 2 2 7v2h20V7L12 2zM4 10v8H2v2h20v-2h-2v-8h-2v8h-3v-8h-2v8H8v-8H6v8H4v-8h0z"/>',
  star:'<path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2 2 9.4l7-.9L12 2z"/>',
  check:'<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>',
  price:'<path d="M2 12 12 2h9v9L11 21 2 12zm15-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
  support:'<path d="M12 2a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h1v-8H6v-1a6 6 0 0 1 12 0v1h-2v8h1a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8z"/>',
  handshake:'<path d="m12 5 2-1.5 6 4.5v9l-3-1-4-4 1-1-2-2-2 2 1 1-3 3-3-2V8l6-4.5L12 5z"/>'
};

/* ============ DATA ============ */
const products = [
  {icon:'solar',name:'Solar Rooftop Systems',desc:'On-grid & off-grid rooftop solar for homes, business & industry.'},
  {icon:'heater',name:'Solar Water Heaters',desc:'Energy-efficient hot water solutions for every need.'},
  {icon:'pump',name:'Racold Heat Pumps',desc:'Reliable, energy-saving heat pump water heating.'},
  {icon:'pump',name:'Redsun Heat Pumps',desc:'High-performance heat pumps for continuous hot water.'},
  {icon:'ups',name:'Exide Home UPS',desc:'Uninterrupted power backup for your home & office.'},
  {icon:'battery',name:'Tubular Batteries',desc:'Long-life Exide tubular batteries for deep backup.'},
  {icon:'car',name:'Vehicle Batteries',desc:'Genuine automotive batteries for all vehicles.'},
  {icon:'plug',name:'Electrical Accessories',desc:'Switches, wiring, fittings & complete electrical goods.'}
];
const services = [
  {icon:'sales',name:'Sales',desc:'Genuine products at the best price.'},
  {icon:'install',name:'Installation',desc:'Professional & safe installation.'},
  {icon:'amc',name:'AMC & Maintenance',desc:'Annual maintenance contracts.'},
  {icon:'repair',name:'Repair & Service',desc:'Quick, dependable repairs.'},
  {icon:'survey',name:'Rooftop Survey',desc:'Free site assessment for solar.'},
  {icon:'battery',name:'Battery Replacement',desc:'On-time battery swaps.'},
  {icon:'consult',name:'Electrical Consultancy',desc:'Expert guidance for projects.'},
  {icon:'project',name:'Project Execution',desc:'End-to-end project delivery.'},
  {icon:'warranty',name:'Warranty Support',desc:'Hassle-free warranty service.'}
];
const industries = [
  {icon:'home',name:'Residential Homes'},{icon:'apartment',name:'Apartments'},
  {icon:'school',name:'Schools'},{icon:'hospital',name:'Hospitals'},
  {icon:'hotel',name:'Hotels'},{icon:'building',name:'Commercial Buildings'},
  {icon:'factory',name:'Factories'},{icon:'industry',name:'Industrial Units'},
  {icon:'gov',name:'Government Offices'}
];
const why = [
  {icon:'star',t:'25 Years Experience'},{icon:'check',t:'Genuine Products'},
  {icon:'install',t:'Professional Installation'},{icon:'support',t:'Expert Technical Support'},
  {icon:'price',t:'Best Price Assurance'},{icon:'project',t:'Commercial & Industrial Projects'},
  {icon:'home',t:'Residential Projects'},{icon:'amc',t:'Complete Sales & Service'},
  {icon:'warranty',t:'Trusted Brands'},{icon:'handshake',t:'Customer Satisfaction'}
];

/* ============ RENDER ============ */
const svg = (p)=>`<svg viewBox="0 0 24 24">${I[p]||I.check}</svg>`;

document.getElementById('productGrid').innerHTML = products.map(p=>`
  <div class="card reveal">
    <div class="card__ico">${svg(p.icon)}</div>
    <h3>${p.name}</h3><p>${p.desc}</p>
  </div>`).join('');

document.getElementById('serviceGrid').innerHTML = services.map(s=>`
  <div class="service reveal">
    <div class="service__ico">${svg(s.icon)}</div>
    <div><h4>${s.name}</h4><p>${s.desc}</p></div>
  </div>`).join('');

document.getElementById('industryGrid').innerHTML = industries.map(i=>`
  <div class="chip reveal">${svg(i.icon)}<span>${i.name}</span></div>`).join('');

document.getElementById('whyGrid').innerHTML = why.map(w=>`
  <div class="why-item reveal">
    <div class="why-item__ico">${svg(w.icon)}</div>
    <h4>${w.t}</h4>
  </div>`).join('');

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
});

/* ============ COUNTER ANIMATION ============ */
function animateCount(el){
  const target = +el.dataset.count; const dur = 1400; const start = performance.now();
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
      if(en.target.classList.contains('stat__num')) animateCount(en.target);
      io.unobserve(en.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.stat__num').forEach(el=>io.observe(el));

/* ============ HEADER SHADOW ON SCROLL ============ */
const header = document.getElementById('header');
window.addEventListener('scroll',()=>{
  header.style.boxShadow = window.scrollY>10 ? '0 4px 20px rgba(10,31,92,.12)' : '0 2px 14px rgba(10,31,92,.07)';
});

/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();
