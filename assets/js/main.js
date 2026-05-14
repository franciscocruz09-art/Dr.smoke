'use strict';

/* ── HELPER: build WhatsApp URL with emojis ── */
function waURL(brand, name, flavor, price, img){
  const text =
    `🔥 *¡Hola Doctor Smoke!* 🔥\n\n` +
    `Me interesa este producto:\n\n` +
    `🛒 *${brand} ${name}*\n` +
    `🍃 Sabor: *${flavor}*\n` +
    `💰 Precio: *${price}*\n\n` +
    `¿Tienen disponible? 🙏`;
  return 'https://wa.me/529673400301?text=' + encodeURIComponent(text);
}

/* ── PRODUCT DATA ── */
const PRODUCTS = [
  /* 0 */ {
    brand:'Waka', name:'GO 10000', flavor:'Piña Colada',
    puffs:'10,000', price:'$280 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.40 AM.jpeg',
    desc:'Recargable y ultrafino. El Waka GO combina un diseño elegante con 10,000 caladas de sabor auténtico a piña colada. Batería de 700mAh con +30% más riqueza de sabor.'
  },
  /* 1 */ {
    brand:'Waka', name:'Pocket 5000', flavor:'Strawberry Mint',
    puffs:'5,000', price:'$250 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.40 AM (2).jpeg',
    desc:'La Mint Series de Waka en formato pocket. Ultra delgado, diseño de 18mm de grosor. Fresa fresca con un toque mentolado perfectamente equilibrado.'
  },
  /* 2 */ {
    brand:'Waka', name:'Icon 50K', flavor:'Peach Mango Watermelon',
    puffs:'50,000', price:'$450 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.40 AM (3).jpeg',
    desc:'El flagship absoluto de Waka. Tecnología SmartPill anti-goteo, 50,000 caladas y mezcla tropical de durazno, mango y sandía.'
  },
  /* 3 */ {
    brand:'Waka', name:'Blade 33K', flavor:'Passion Fruit',
    puffs:'33,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.40 AM (4).jpeg',
    desc:'Diseño metálico premium con 3 modos de potencia. 33,000 caladas con tecnología Extra Smooth. El intenso sabor a maracuyá se mantiene fiel de la primera a la última calada.'
  },
  /* 4 */ {
    brand:'Nexa', name:'Ultra 40K', flavor:'Triple Berry',
    puffs:'40,000', price:'$450 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.40 AM (5).jpeg',
    desc:'El Ultra de Nexa redefine la potencia. Pantalla digital, Modo Turbo (25K puffs) o Modo Normal (40K puffs). Una explosión de frutos del bosque que no termina.'
  },
  /* 5 */ {
    brand:'Waka', name:'Slim 12K', flavor:'Peach Ice',
    puffs:'12,000', price:'$280 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM.jpeg',
    desc:'El más delgado de la línea Waka. Batería de 700mAh y 12,000 caladas de durazno refrescante con hielo. Minimalismo y sabor en perfecta armonía.'
  },
  /* 6 */ {
    brand:'Waka', name:'soPro Titan 30K', flavor:'Strawberry Kiwi Ice',
    puffs:'30,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (1).jpeg',
    desc:'SoPro Titan — la bestia de la línea. Pantalla digital, carga rápida y 30,000 caladas con dos modos: Boost (5%) o Eco (2%). Fresa, kiwi y hielo en cada calada.'
  },
  /* 7 */ {
    brand:'Waka', name:'SoPro 15K', flavor:'Cherry Berry',
    puffs:'15,000', price:'$320 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (2).jpeg',
    desc:'Dual Mesh coils para un vapor denso y rico. Carga completa en 15 minutos. 15,000 caladas de cereza oscura y frutos rojos intensos.'
  },
  /* 8 */ {
    brand:'Lost Mary · Elfbar', name:'OS5000 Cosmic', flavor:'Berry Cherry',
    puffs:'5,000', price:'$120 MXN', nicotine:'5%', rechargeable:false,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (3).jpeg',
    desc:'Edición Cosmic limitada de Elfbar. Circuitos de precisión, malla de calidad superior y 5,000 caladas de vapor denso. Berry Cherry es una explosión de frutos rojos.'
  },
  /* 9 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Strawberry Kiwi',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (4).jpeg',
    desc:'Tecnología +Ice Blast exclusiva: mantén presionado para activar una ráfaga de hielo extra. 36,000 caladas de fresa y kiwi con intensidad máxima.'
  },
  /* 10 */ {
    brand:'Waka', name:'Icon 50K', flavor:'Kiwi Dragon Berry',
    puffs:'50,000', price:'$450 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (5).jpeg',
    desc:'El flagship Icon en sabor exclusivo. Kiwi, dragon fruit y berry en una armonía frutal compleja. SmartPill anti-goteo, 50,000 caladas de consistencia perfecta.'
  },
  /* 11 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Peach Mango Watermelon',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (6).jpeg',
    desc:'El Burst en su versión tropical más popular. +Ice Blast opcional para intensificar el sabor. 36,000 caladas de durazno, mango y sandía.'
  },
  /* 12 */ {
    brand:'Waka', name:'SoPro 15K', flavor:'Watermelon Kiwi',
    puffs:'15,000', price:'$320 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-03-27 at 12.52.41 AM (7).jpeg',
    desc:'La versión más frutal del SoPro. Dual Mesh para un vapor denso de sandía dulce y kiwi fresco. 15,000 caladas de calidad premium.'
  },
  /* 13 */ {
    brand:'Waka', name:'SoPro 15K', flavor:'Cool Mint',
    puffs:'15,000', price:'$320 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.42 PM (3).jpeg',
    desc:'Frescura extrema en cada calada. El SoPro 15K en sabor Cool Mint ofrece menta pura y refrescante con tecnología de carga rápida.'
  },
  /* 14 */ {
    brand:'Waka', name:'SoPro 15K', flavor:'Cherry Berry',
    puffs:'15,000', price:'$320 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.42 PM (4).jpeg',
    desc:'Cereza dulce y frutos del bosque en el SoPro 15K. Dual Mesh para vapor denso y 15,000 caladas de consistencia premium.'
  },
  null, /* 15 — removed (duplicate of #0 Waka GO 10000 Piña Colada) */
  /* 16 */ {
    brand:'Waka', name:'Pro 30K', flavor:'Strawberry Kiwi',
    puffs:'30,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.43 PM.jpeg',
    desc:'Waka Pro 30K UPGRADE con Richer Taste y +Ice Blast. 30,000 caladas de fresa y kiwi con modo Boost para mayor intensidad.'
  },
  /* 17 */ {
    brand:'Waka', name:'GO 10000', flavor:'Mr Peach',
    puffs:'10,000', price:'$280 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.43 PM (1).jpeg',
    desc:'El Waka GO 10000 en sabor Mr Peach. Durazno dulce y refrescante con hielo sutil. Extra Smooth para una experiencia suave y constante.'
  },
  null, /* 18 — removed */
  /* 19 */ {
    brand:'Bugatti', name:'Spaceship 7K', flavor:'Frozen Pineapple',
    puffs:'7,000', price:'$200 MXN', nicotine:'5%', rechargeable:false,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (6).jpeg',
    desc:'Diseño de lujo inspirado en Bugatti. El Spaceship ofrece 7,000 caladas de piña congelada en un dispositivo de acabado premium cromado.'
  },
  null, /* 20 — removed */
  null, /* 21 — removed */
  /* 22 */ {
    brand:'Waka', name:'GO 10000', flavor:'Mango Lychee',
    puffs:'10,000', price:'$280 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.42 PM.jpeg',
    desc:'Mango tropical y lychee exótico en el formato GO 10000. Extra Smooth con +30% más riqueza de sabor y batería recargable.'
  },
  /* 23 */ {
    brand:'Waka', name:'GO 10000', flavor:'Peach Blue Raspberry',
    puffs:'10,000', price:'$280 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.42 PM (1).jpeg',
    desc:'Durazno suave con frambuesa azul refrescante. El GO 10000 Extra Smooth para 10,000 caladas de sabor consistente.'
  },
  /* 24 */ {
    brand:'Waka', name:'Blade 33K', flavor:'Blueberry Splash',
    puffs:'33,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.43 PM (2).jpeg',
    desc:'El Blade 33K en sabor Blueberry Splash. 3 modos de potencia, diseño metálico premium y 33,000 caladas de arándano azul fresco y jugoso.'
  },
  /* 25 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Watermelon Ice',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM.jpeg',
    desc:'Sandía helada con +Ice Blast. 36,000 caladas de frescura extrema. Mantén presionado para activar la ráfaga de hielo extra.'
  },
  /* 26 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Cherry Bomb',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (1).jpeg',
    desc:'Cereza intensa con +Ice Blast. 36,000 caladas explosivas de Cherry Bomb. Una experiencia potente y refrescante en cada calada.'
  },
  /* 27 */ {
    brand:'Lost Vape', name:'Orion Bar 7500', flavor:'Strawberry Kiwi',
    puffs:'7,500', price:'$120 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (2).jpeg',
    desc:'Lost Vape Orion Bar 7500 en sabor Strawberry Kiwi. 7,500 caladas de fresa y kiwi con diseño artístico exclusivo. Compacto y recargable.'
  },
  /* 28 */ {
    brand:'Lost Vape', name:'Orion Bar 7500', flavor:'Sour Apple Ice',
    puffs:'7,500', price:'$120 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (4).jpeg',
    desc:'Manzana verde ácida con hielo refrescante. El Orion Bar 7500 con SmartSync y tecnología Leak-Proof. 7,500 caladas de frescura.'
  },
  /* 29 */ {
    brand:'Lost Vape', name:'Orion Bar 7500', flavor:'Ice Cap',
    puffs:'7,500', price:'$120 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (8).jpeg',
    desc:'Edición Limitada del Orion Bar 7500. Hielo puro y refrescante con 18ml de capacidad y 650mAh de batería. La experiencia más fresca.'
  },
  null, /* 30 — removed (duplicate) */
  null, /* 31 — removed (duplicate of #25 Waka Burst 36K Watermelon Ice) */
  null, /* 32 — removed (duplicate of #27 Lost Vape Orion Bar 7500 Strawberry Kiwi) */
  /* 33 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Blueberry Watermelon',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (3).jpeg',
    desc:'Arándano azul y sandía con +Ice Blast. 36,000 caladas de la combinación frutal más refrescante de la línea Burst.'
  },
  /* 34 */ {
    brand:'Lost Vape', name:'Orion Bar 7500', flavor:'Peach Mango Watermelon',
    puffs:'7,500', price:'$120 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.45 PM (1).jpeg',
    desc:'Durazno, mango y sandía en el Orion Bar 7500. Diseño artístico premium con 7,500 caladas de sabor tropical intenso.'
  },
  /* 35 */ {
    brand:'Waka', name:'Icon 50K', flavor:'Watermelon Ice',
    puffs:'50,000', price:'$450 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.45 PM (3).jpeg',
    desc:'El Icon 50K en sabor Watermelon Ice. SmartPill anti-goteo, SmartSync y 50,000 caladas de sandía helada premium.'
  },
  /* 36 */ {
    brand:'Waka', name:'Burst 36K', flavor:'Strawberry Refresher',
    puffs:'36,000', price:'$380 MXN', nicotine:'5%', rechargeable:true,
    img:'assets/images/productos/WhatsApp Image 2026-04-17 at 8.51.44 PM (5).jpeg',
    desc:'Fresa refrescante con +Ice Blast. 36,000 caladas de Strawberry Refresher con tecnología Leak-Proof y SmartSync.'
  },
];

/* Generate wa property for each product */
PRODUCTS.forEach(p => {
  if(!p) return;
  p.wa = waURL(p.brand, p.name, p.flavor, p.price, p.img);
});

/* ── INJECT PEDIR BUTTONS ── */
(function(){
  document.querySelectorAll('.pcard').forEach(card=>{
    const id = +card.dataset.id;
    const p  = PRODUCTS[id];
    if(!p) return;
    const slot = card.querySelector('.bwa-card-slot');
    if(!slot) return;
    const a = document.createElement('a');
    a.className = 'bwa-card';
    a.href      = p.wa;
    a.target    = '_blank';
    a.rel       = 'noopener';
    a.textContent = 'Pedir';
    slot.replaceWith(a);
  });
})();

/* ── BRANDS STRIP ── */
(function(){
  const brands = ['Waka','Nexa','Lost Mary','Bugatti'];
  const track  = document.getElementById('btrack');
  [...brands,...brands,...brands,...brands].forEach(b=>{
    const el = document.createElement('div');
    el.className = 'brand-pill';
    el.textContent = b;
    track.appendChild(el);
  });
})();

/* ── NAVBAR ── */
(function(){
  const nav = document.getElementById('nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>24),{passive:true});
  nav.classList.toggle('scrolled',scrollY>24);
  const burger = document.getElementById('burger');
  const mob    = document.getElementById('mobMenu');
  burger.addEventListener('click',()=>{
    const o = mob.classList.toggle('open');
    burger.classList.toggle('open',o);
    burger.setAttribute('aria-expanded',o?'true':'false');
  });
  mob.querySelectorAll('.ml').forEach(l=>l.addEventListener('click',()=>{
    mob.classList.remove('open');burger.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  }));
  /* Active nav highlight via IntersectionObserver */
  (function(){
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-links a');
    const setActive = id => {
      links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
    };
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{ if(entry.isIntersecting) setActive(entry.target.id); });
    },{rootMargin:'-45% 0px -45% 0px',threshold:0});
    sections.forEach(s=>obs.observe(s));
  })();
  /* Promo bar collapse on scroll */
  (function(){
    const bar = document.getElementById('promo-bar');
    if(!bar) return;
    const barH = bar.offsetHeight;
    let hidden = false;
    window.addEventListener('scroll',()=>{
      if(!hidden && scrollY >= barH){
        hidden = true;
        document.documentElement.style.setProperty('--promo-h','0px');
      } else if(hidden && scrollY < barH){
        hidden = false;
        document.documentElement.style.setProperty('--promo-h', barH+'px');
      }
    },{passive:true});
  })();
})();

/* ── DUAL FILTER ── */
(function(){
  let ab='all', af='all';
  const cards = document.querySelectorAll('.pcard');
  function apply(){
    cards.forEach(c=>{
      const ok = (ab==='all'||c.dataset.brand===ab) && (af==='all'||c.dataset.flavor.split(' ').includes(af));
      if(ok){c.classList.remove('hidden');gsap.fromTo(c,{opacity:0,y:8,scale:.97},{opacity:1,y:0,scale:1,duration:.3,ease:'power2.out'})}
      else c.classList.add('hidden');
    });
  }
  document.querySelectorAll('[data-brand].fb').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('[data-brand].fb').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); ab=b.dataset.brand; apply();
    });
  });
  document.querySelectorAll('[data-flavor].fb').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('[data-flavor].fb').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); af=b.dataset.flavor; apply();
    });
  });
})();

/* ── PRODUCT MODAL ── */
(function(){
  const overlay   = document.getElementById('modal-overlay');
  const panel     = document.getElementById('modal-panel');
  const closeBtn  = document.getElementById('modal-close');
  const mImg      = document.getElementById('modal-img');
  const mImgSide  = document.getElementById('modal-img-side');
  const mInfo     = document.getElementById('modal-info');
  const mBrand    = document.getElementById('modal-brand');
  const mName     = document.getElementById('modal-name');
  const mFlavor   = document.getElementById('modal-flavor');
  const mSpecs    = document.getElementById('modal-specs');
  const mDesc     = document.getElementById('modal-desc');
  const mPrice    = document.getElementById('modal-price');
  const mWa       = document.getElementById('modal-wa');

  /* ── GOLD SPARKS ─────────────────────────────────── */
  const SPARK_N  = 70;
  const SPARK_COLORS = ['#C9A84C','#E8A828','#FFD060','#F0B030','#FFC850','#D4921E','#FFE080'];
  let sparkCanvas = null, sparkCtx = null, sparkRAF = 0, sparks = [];

  function resetSpark(s, w, h, randomY){
    s.x     = Math.random() * w;
    s.y     = randomY ? Math.random() * h : h + Math.random() * 12;
    s.r     = Math.random() * 2.4 + .3;
    s.vy    = Math.random() * 1.5 + .6;
    s.vx    = (Math.random() - .5) * .8;
    s.life  = randomY ? Math.random() * .9 + .1 : 1;
    s.decay = Math.random() * .007 + .003;
    s.color = SPARK_COLORS[Math.random() * SPARK_COLORS.length | 0];
  }

  function tickSparks(){
    const w = sparkCanvas.width, h = sparkCanvas.height;
    sparkCtx.clearRect(0, 0, w, h);
    for(const s of sparks){
      s.y    -= s.vy;
      s.x    += s.vx;
      s.vx   += (Math.random() - .5) * .07;
      s.life -= s.decay;
      if(s.life <= 0) resetSpark(s, w, h, false);
      const a = Math.max(0, s.life);
      sparkCtx.save();
      sparkCtx.globalAlpha = a * .88;
      sparkCtx.shadowBlur  = s.r * 7;
      sparkCtx.shadowColor = s.color;
      sparkCtx.fillStyle   = s.color;
      sparkCtx.beginPath();
      sparkCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      sparkCtx.fill();
      sparkCtx.globalAlpha = a * .3;
      sparkCtx.fillRect(s.x - .5, s.y, 1, s.vy * 3.5);
      sparkCtx.restore();
    }
    sparkRAF = requestAnimationFrame(tickSparks);
  }

  function startSparks(){
    cancelAnimationFrame(sparkRAF);
    if(!sparkCanvas){
      sparkCanvas = document.createElement('canvas');
      sparkCanvas.className = 'spark-canvas';
      mImgSide.insertBefore(sparkCanvas, mImgSide.firstChild);
    }
    const rect = mImgSide.getBoundingClientRect();
    const w = sparkCanvas.width  = rect.width  || 430;
    const h = sparkCanvas.height = rect.height || 420;
    sparkCtx = sparkCanvas.getContext('2d');
    sparks = Array.from({length: SPARK_N}, () => {
      const s = {};
      resetSpark(s, w, h, true);
      return s;
    });
    tickSparks();
  }

  function stopSparks(){
    cancelAnimationFrame(sparkRAF);
    if(sparkCtx) sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);
  }

  function openModal(id){
    const p = PRODUCTS[id];
    if(!p) return;

    mBrand.textContent  = p.brand;
    mName.textContent   = p.name;
    mFlavor.textContent = p.flavor;
    mDesc.textContent   = p.desc;
    mPrice.innerHTML    = `<sup>$</sup>${p.price.replace('$','').replace(' MXN','')} <small>MXN</small>`;
    mWa.href            = p.wa;
    mSpecs.innerHTML = `
      <span class="spec-tag gold">${p.puffs} puffs</span>
      <span class="spec-tag">Nicotina ${p.nicotine}</span>
      ${p.rechargeable?'<span class="spec-tag">Recargable</span>':''}
    `;
    if(p.img){
      mImg.src = p.img; mImg.alt = `${p.name} ${p.flavor}`;
      mImg.style.display = 'block';
      mImgSide.style.background = 'radial-gradient(ellipse 90% 80% at 50% 110%,rgba(201,168,76,.14) 0%,#080810 55%)';
    } else {
      mImg.style.display = 'none';
      mImgSide.style.background = 'radial-gradient(ellipse 90% 80% at 50% 110%,rgba(201,100,20,.2) 0%,#0e0608 55%)';
    }

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    overlay.classList.add('open');

    gsap.fromTo(overlay,
      {opacity:0},
      {opacity:1, duration:.4, ease:'power2.out'});

    gsap.fromTo(panel,
      {opacity:0, scale:.88, y:44},
      {opacity:1, scale:1,  y:0,  duration:.55, ease:'expo.out'});

    gsap.fromTo(mImgSide,
      {clipPath:'inset(0 0 100% 0)', opacity:1},
      {clipPath:'inset(0 0 0% 0)',   duration:.6, ease:'expo.out', delay:.08,
       onComplete: startSparks});

    if(p.img){
      gsap.fromTo(mImg,
        {scale:1.12, opacity:0},
        {scale:1,    opacity:1, duration:.75, ease:'power3.out', delay:.2});
    }

    const items = mInfo.querySelectorAll(
      '.modal-brand,.modal-name,.modal-flavor,.modal-specs,.modal-sep,.modal-desc,.modal-price-row'
    );
    gsap.fromTo(items,
      {opacity:0, y:22},
      {opacity:1, y:0,  duration:.52, stagger:.07, ease:'power3.out', delay:.22});
  }

  function closeModal(){
    stopSparks();
    const tl = gsap.timeline();
    tl.to(panel,   {opacity:0, scale:.92, y:24, duration:.3,  ease:'power3.in'})
      .to(overlay, {opacity:0,            duration:.25, ease:'power2.in',
        onComplete(){
          overlay.style.display = 'none';
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      }, '-=.12');
  }

  document.querySelectorAll('.pcard').forEach(card=>{
    card.addEventListener('click',e=>{
      if(e.target.closest('.bwa-card')) return;
      openModal(+card.dataset.id);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) closeModal(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
})();

/* ── HERO ENTRANCE ── */
(function(){
  /* BlurText effect on the hero title — animates per-word with blur + fade + slide */
  const hT = document.getElementById('hT');
  if(hT){
    const delayMs      = 180;  /* stagger entre palabras */
    const stepDuration = 0.55; /* duración de cada paso (s) */

    /* Recoge los nodos preservando <br> y <em> */
    const nodes = [];
    hT.childNodes.forEach(node => {
      if(node.nodeType === Node.TEXT_NODE){
        node.textContent.split(/(\s+)/).forEach(tok => {
          if(tok === '') return;
          if(/^\s+$/.test(tok)) nodes.push({type:'space'});
          else nodes.push({type:'word', text: tok});
        });
      } else if(node.nodeName === 'BR'){
        nodes.push({type:'br'});
      } else if(node.nodeName === 'EM'){
        node.textContent.split(/(\s+)/).forEach(tok => {
          if(tok === '') return;
          if(/^\s+$/.test(tok)) nodes.push({type:'space'});
          else nodes.push({type:'word', text: tok, em: true});
        });
      }
    });

    hT.innerHTML = '';
    hT.style.display      = 'inline-block';
    hT.style.opacity      = '1';
    hT.style.transform    = 'none';

    const spans = [];
    nodes.forEach(n => {
      if(n.type === 'br'){ hT.appendChild(document.createElement('br')); return; }
      if(n.type === 'space'){ hT.appendChild(document.createTextNode('\u00A0')); return; }
      const s = document.createElement(n.em ? 'em' : 'span');
      s.textContent = n.text;
      s.style.display       = 'inline-block';
      s.style.willChange    = 'transform, filter, opacity';
      s.style.filter        = 'blur(10px)';
      s.style.opacity       = '0';
      s.style.transform     = 'translateY(-50px)';
      hT.appendChild(s);
      spans.push(s);
    });

    /* Anima cada palabra con dos keyframes (igual que BlurText) */
    spans.forEach((span, i) => {
      gsap.timeline({delay: 0.25 + (i * delayMs) / 1000})
        .to(span, {
          filter: 'blur(5px)', opacity: 0.5, y: 5,
          duration: stepDuration, ease: 'power2.out'
        })
        .to(span, {
          filter: 'blur(0px)', opacity: 1, y: 0,
          duration: stepDuration, ease: 'power2.out'
        });
    });
  }

  /* Resto del hero (eyebrow, subtítulo, botones) */
  const tl = gsap.timeline({defaults:{ease:'power3.out'}});
  tl.to('#hEy',{opacity:1,y:0,duration:.7,delay:.2})
    .to('#hS', {opacity:1,y:0,duration:.7}, '+=.3')
    .to('#hB', {opacity:1,y:0,duration:.6}, '-=.4');
})();

/* ── SCROLL REVEAL ── */
(function(){
  if(typeof ScrollTrigger==='undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.65,ease:'power2.out',delay:(i%3)*.07,
      scrollTrigger:{trigger:el,start:'top 88%',once:true}});
  });
  gsap.utils.toArray('.pcard').forEach((card,i)=>{
    gsap.from(card,{opacity:0,y:24,scale:.97,duration:.5,ease:'power2.out',delay:(i%4)*.09,
      scrollTrigger:{trigger:card,start:'top 90%',once:true}});
  });
  /* Stats counters */
  gsap.utils.toArray('.stat-val').forEach(el=>{
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const obj = {val:0};
    gsap.to(obj,{
      val:target, duration:1.8, ease:'power1.out',
      onUpdate(){ el.textContent = Math.round(obj.val) + suffix; },
      scrollTrigger:{trigger:el, start:'top 85%', once:true}
    });
  });
})();

/* ── FAQ ACCORDION ── */
(function(){
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item=>{
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click',()=>{
      const isOpen = item.classList.contains('open');
      items.forEach(i=>{
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded','false');
        gsap.to(i.querySelector('.faq-a'),{height:0,duration:.28,ease:'power2.inOut'});
      });
      if(!isOpen){
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        const inner = ans.querySelector('.faq-a-inner');
        gsap.to(ans,{height:inner.offsetHeight,duration:.32,ease:'power2.out'});
      }
    });
  });
})();

/* ── LUZ AMBIENTAL EN CARDS ── */
(function(){
  if(window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.pcard').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });
})();

/* ── TILT SUTIL EN CARDS ── */
(function(){
  if(window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.pcard').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      gsap.to(card,{rotateY:x*7, rotateX:-y*7, transformPerspective:1000, ease:'power2.out', duration:.5});
    });
    card.addEventListener('mouseleave', ()=>{
      gsap.to(card,{rotateY:0, rotateX:0, duration:1, ease:'power3.out'});
    });
  });
})();

/* ── BOTONES MAGNÉTICOS (sutil) ── */
(function(){
  if(window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.btn-gold,.bwa-main,.bwa-modal,.bwa-card').forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.18;
      const y = (e.clientY - r.top  - r.height / 2) * 0.18;
      gsap.to(btn,{x, y, duration:.4, ease:'power2.out'});
    });
    btn.addEventListener('mouseleave', ()=>{
      gsap.to(btn,{x:0, y:0, duration:.8, ease:'power3.out'});
    });
  });
})();

/* ── PARALLAX ORBS HERO ── */
(function(){
  if(typeof ScrollTrigger==='undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('#hero .orb').forEach((orb,i)=>{
    gsap.to(orb,{
      y:(i%2===0?-1:1)*(40+i*14),
      x:(i%3===0?1:-1)*(14+i*6),
      ease:'none',
      scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:2}
    });
  });
})();

/* ── CORTINA DE ENTRADA ── */
(function(){
  const curtain = document.createElement('div');
  curtain.style.cssText='position:fixed;inset:0;background:#09090e;z-index:99999;pointer-events:none';
  document.body.appendChild(curtain);
  gsap.to(curtain,{opacity:0,duration:1.1,delay:.2,ease:'power2.inOut',onComplete:()=>curtain.remove()});
})();

/* ── LÍNEAS DORADAS QUE SE DIBUJAN ── */
(function(){
  if(typeof ScrollTrigger==='undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.gold-rule').forEach(rule=>{
    gsap.from(rule,{
      width:0,
      duration:.9,
      ease:'power2.inOut',
      scrollTrigger:{trigger:rule,start:'top 90%',once:true}
    });
  });
})();

/* ── TÍTULOS CON REVEAL POR PALABRAS ── */
(function(){
  if(typeof ScrollTrigger==='undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.section-title').forEach(el=>{
    if(el.dataset.split) return;
    el.dataset.split='1';
    const parts = el.innerHTML.split(/(<[^>]+>|&[^;]+;|\s+)/g);
    el.innerHTML = parts.map(p=>{
      if(/^<|^\s+$|^&/.test(p)) return p;
      return `<span class="_sw" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="_wi" style="display:inline-block">${p}</span></span>`;
    }).join('');
    gsap.from(el.querySelectorAll('._wi'),{
      y:'100%',
      duration:.9,
      stagger:.08,
      ease:'power4.out',
      scrollTrigger:{trigger:el,start:'top 88%',once:true}
    });
  });
})();
