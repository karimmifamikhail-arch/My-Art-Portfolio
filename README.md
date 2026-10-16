<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bet Elfan — Graphic Designer &amp; Visual Artist</title>
<meta name="description" content="Bet Elfan is a graphic designer and visual artist in Giza, Egypt. Graffiti, tattoo design, pencil portraits and mosaic with a story to tell.">
<meta name="theme-color" content="#F1F0EA">
<meta property="og:type" content="website">
<meta property="og:title" content="Bet Elfan — Graphic Designer &amp; Visual Artist">
<meta property="og:description" content="Where graphic design meets fine art — visuals with a story to tell.">
<meta property="og:image" content="logo.webp">
<!-- Favicon: put logo.webp in the same folder as index.html -->
<link rel="icon" type="image/webp" href="logo.webp">
<link rel="shortcut icon" href="logo.webp">
<link rel="apple-touch-icon" href="logo.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--paper:#F1F0EA;--ink:#141414;--muted:#55554F;--red:#C8342E;--yellow:#D6C21E;--blue:#2E8FCE;--hdr:72px}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:var(--hdr)}
body{margin:0;background:var(--paper);color:var(--ink);font-family:'Inter',system-ui,sans-serif;line-height:1.65;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Archivo Black',Impact,sans-serif;font-weight:400;letter-spacing:-.01em;margin:0}
img{max-width:100%;display:block}
a{color:inherit}
::selection{background:var(--ink);color:var(--paper)}
:focus-visible{outline:3px solid var(--blue);outline-offset:3px}
.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
.skip{position:absolute;left:16px;top:-60px;background:var(--ink);color:var(--paper);padding:10px 16px;z-index:200;font-weight:700}
.skip:focus{top:12px}

/* logo-style offset color block */
.tag{position:relative;display:inline-block;z-index:0}
.tag::before{content:"";position:absolute;inset:6px -10px -8px 8px;z-index:-1}
.tag.red::before{background:var(--red)}
.tag.yellow::before{background:var(--yellow)}
.tag.blue::before{background:var(--blue)}
.tag.ink::before{background:var(--ink);opacity:.14}

/* header */
header{position:sticky;top:0;z-index:40;background:rgba(241,240,234,.95);backdrop-filter:blur(6px);border-bottom:3px solid var(--ink)}
.nav{display:flex;align-items:center;justify-content:space-between;height:var(--hdr);max-width:1180px;margin:0 auto;padding:0 32px}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;font-family:'Archivo Black',sans-serif;font-size:1.05rem}
.brand img{width:44px;height:44px;object-fit:contain}
.navlinks{display:flex;align-items:center;gap:32px;list-style:none;margin:0;padding:0}
.navlinks li{display:flex;align-items:center;margin:0;padding:0}
.navlinks a{display:block;font-family:'Inter',system-ui,sans-serif;text-decoration:none;font-weight:700;font-size:.92rem;line-height:1.2;padding:6px 0;border-bottom:3px solid transparent;transition:border-color .2s}
.navlinks a:hover{border-color:var(--red)}
.navtoggle{display:none;background:none;border:2px solid var(--ink);width:44px;height:44px;font-size:1.2rem;cursor:pointer;color:inherit}
@media(max-width:760px){
 .nav{padding:0 20px}.wrap{padding:0 20px}
 .navtoggle{display:block}
 .navlinks{position:absolute;top:100%;left:0;right:0;background:var(--paper);border-bottom:3px solid var(--ink);flex-direction:column;gap:0;display:none;padding:8px 20px 16px}
 .navlinks.open{display:flex}
 .navlinks a{display:block;padding:14px 0;border:0}
}

/* hero */
.hero{padding:104px 32px 84px;border-bottom:3px solid var(--ink)}
.hero .eyebrow{font-weight:600;color:var(--muted);margin:0 0 22px;font-size:.95rem}
.hero h1{font-size:clamp(2.1rem,5.4vw,3.8rem);line-height:1.15;margin-bottom:28px;max-width:20ch;text-wrap:balance}
.hero .lede{font-size:1.15rem;color:var(--muted);max-width:56ch;margin:0 0 36px}
.btn{display:inline-block;background:var(--ink);color:var(--paper);padding:14px 30px;text-decoration:none;font-weight:700;font-size:.95rem;border:3px solid var(--ink);transition:background .2s,color .2s}
.btn:hover{background:var(--paper);color:var(--ink)}
@media(max-width:760px){.hero{padding:64px 20px 56px}}

/* sections */
.section{padding:92px 0;border-bottom:3px solid var(--ink)}
@media(max-width:760px){.section{padding:64px 0}}
.category+.category{margin-top:88px}
.section-head{margin-bottom:40px}
.section-head h2{font-size:clamp(1.9rem,3.6vw,2.7rem);margin-bottom:16px}
.section-head p{color:var(--muted);max-width:56ch;font-size:1.05rem;margin:0}

/* gallery */
.gallery{column-count:3;column-gap:20px}
@media(max-width:900px){.gallery{column-count:2}}
@media(max-width:560px){.gallery{column-count:1}}
.shot{margin:0 0 20px;break-inside:avoid;border:3px solid var(--ink);background:var(--paper);position:relative;overflow:hidden;cursor:zoom-in}
.shot button{all:unset;display:block;width:100%;cursor:zoom-in}
.shot button:focus-visible{outline:3px solid var(--blue);outline-offset:-6px}
.shot img{width:100%;height:auto;transition:transform .35s ease}
.shot:hover img{transform:scale(1.03)}
.shot.missing{cursor:default;border-style:dashed;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;color:var(--muted);font-size:.9rem;font-weight:600}
.shot.missing button,.shot.missing img{display:none}
.shot.missing::after{content:attr(data-label)}
.lightbox{position:fixed;inset:0;background:rgba(20,20,20,.94);z-index:100;display:none;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
.lightbox.open{display:flex}
.lightbox img{max-width:100%;max-height:100%;border:3px solid var(--paper)}
.lb-close{position:absolute;top:16px;right:16px;width:48px;height:48px;background:var(--paper);color:var(--ink);border:3px solid var(--ink);font-size:1.4rem;cursor:pointer}

/* about */
.about{display:grid;grid-template-columns:1.1fr 1fr;gap:64px}
@media(max-width:820px){.about{grid-template-columns:1fr;gap:44px}}
.about h2{font-size:clamp(1.9rem,3.6vw,2.7rem);margin-bottom:24px}
.about p{color:var(--muted);font-size:1.08rem;max-width:52ch;margin:0}
.tools{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
.tools span{border:2px solid var(--ink);padding:9px 16px;font-size:.85rem;font-weight:700}
.about-card{border:3px solid var(--ink);padding:36px;align-self:start}
.about-card .role{font-family:'Archivo Black',sans-serif;font-size:1.3rem;margin:0 0 12px;color:var(--ink)}
.about-card .sub{color:var(--muted);margin:0}
.about-card ul{list-style:none;margin:24px 0 0;padding:0;display:flex;flex-direction:column;gap:14px}
.about-card li{display:flex;align-items:center;gap:12px;font-weight:600;font-size:.95rem}
.swatch{width:16px;height:16px;flex:none}
.swatch.red{background:var(--red)}.swatch.yellow{background:var(--yellow)}.swatch.blue{background:var(--blue)}.swatch.ink{background:var(--ink)}

/* contact */
.contact{border-bottom:none}
.contact-wrap{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap}
.contact h2{font-size:clamp(2rem,5vw,3.3rem);margin-bottom:16px;max-width:16ch}
.contact p{color:var(--muted);max-width:44ch;margin:0 0 28px;font-size:1.05rem}
.social{display:flex;gap:14px;flex-wrap:wrap}
.social a{width:52px;height:52px;border:2.5px solid var(--ink);display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s}
.social a:hover{background:var(--ink);color:var(--paper)}
footer{padding:26px 0;text-align:center;color:var(--muted);font-size:.85rem;border-top:3px solid var(--ink)}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
</style>
</head>
<body>
<a href="#work" class="skip">Skip to content</a>

<header>
  <nav class="nav" aria-label="Main">
    <a href="#top" class="brand"><img src="logo.webp" alt="" width="44" height="44"><span>Bet Elfan</span></a>
    <button class="navtoggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">☰</button>
    <ul class="navlinks" id="navLinks">
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main id="top">
<section class="hero wrap">
  <p class="eyebrow">Graphic Designer &amp; Visual Artist, Giza, Egypt</p>
  <h1>Where graphic design meets fine art — <span class="tag red">visuals</span> with a story to tell.</h1>
  <p class="lede">For 10 years, I've turned empty spaces into something worth looking at — from street walls to tattoo designs to the fine detail of a pencil portrait. Each piece tells its own story.</p>
  <a href="#work" class="btn">See the work</a>
</section>

<section class="section" id="work">
  <div class="wrap">

    <div class="category" id="graffiti">
      <div class="section-head">
        <h2><span class="tag red">Graffiti</span></h2>
        <p>Bold colors and free-flowing lines that turn walls into stories.</p>
      </div>
      <div class="gallery">
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="imagesgraffiti-1.JPG.jpg" alt="Hand-painted graffiti portrait of a bearded warrior on a black wall" width="976" height="1280" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="imagesgraffiti-2.JPG.jpg" alt="Hand-painted Cairo Sushi food trailer with Japanese-style artwork" width="1600" height="1200" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="imagesgraffiti-3.JPG.jpg" alt="Imperial College Egypt school wall mural with a phoenix mascot reading a book" width="1200" height="1600" loading="lazy"></button></figure>
      </div>
    </div>

    <div class="category" id="tattoo">
      <div class="section-head">
        <h2><span class="tag blue">Tattoo Design</span></h2>
        <p>Custom tattoo designs, drawn from each client's own story and details.</p>
      </div>
      <div class="gallery">
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="tatoo.png" alt="Custom tattoo design, piece 1" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="tatoo%20(2).png" alt="Custom tattoo design, piece 2" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="tatoo%20(3).png" alt="Custom tattoo design, piece 3" loading="lazy"></button></figure>
      </div>
    </div>

    <div class="category" id="portraits">
      <div class="section-head">
        <h2><span class="tag ink">Pencil Portraits</span></h2>
        <p>Pencil portraits focused on detail and expression.</p>
      </div>
      <div class="gallery">
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="portrait-1.jpg" alt="Pencil portrait, piece 1" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="portrait-2.jpg" alt="Pencil portrait, piece 2" loading="lazy"></button></figure>
        <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="portrait-3.jpg" alt="Pencil portrait, piece 3" loading="lazy"></button></figure>
      </div>
    </div>

    <div class="category" id="mosaic">
      <div class="section-head">
        <h2><span class="tag yellow">Mosaic</span></h2>
        <p>Scattered pieces coming together into one complete picture.</p>
      </div>
      <div class="gallery">
        <!-- Add photos like: <figure class="shot" data-label="Photo coming soon"><button type="button" aria-label="View larger"><img src="mosaic-1.jpg" alt="Describe the piece" loading="lazy"></button></figure> -->
        <figure class="shot missing" data-label="Photos coming soon"></figure>
        <figure class="shot missing" data-label="Photos coming soon"></figure>
        <figure class="shot missing" data-label="Photos coming soon"></figure>
      </div>
    </div>

  </div>
</section>

<section class="section" id="about">
  <div class="wrap about">
    <div>
      <h2>About</h2>
      <p>For 10 years, I've turned empty spaces into something worth looking at — from street walls to tattoo designs to the fine detail of a pencil portrait. Each piece tells its own story.</p>
      <div class="tools">
        <span>Spray Paint &amp; Markers</span>
        <span>Procreate</span>
        <span>Adobe Photoshop</span>
        <span>Tattoo Machine &amp; Ink</span>
        <span>Graphite Pencils</span>
        <span>Mosaic Tiles &amp; Grout</span>
      </div>
    </div>
    <div class="about-card">
      <p class="role">Bet Elfan</p>
      <p class="sub">Graphic Designer &amp; Visual Artist based in Giza, Egypt.</p>
      <ul>
        <li><span class="swatch red"></span>Graffiti</li>
        <li><span class="swatch blue"></span>Tattoo Design</li>
        <li><span class="swatch ink"></span>Pencil Portraits</li>
        <li><span class="swatch yellow"></span>Mosaic</li>
      </ul>
    </div>
  </div>
</section>

<section class="section contact" id="contact">
  <div class="wrap contact-wrap">
    <div>
      <h2>Got a project in mind?</h2>
      <p>Reach out and let's talk — whether it's a wall, a tattoo idea, or a portrait.</p>
      <a href="mailto:karim.mifamikhail@gmail.com" class="btn">Email me</a>
    </div>
    <div class="social">
      <a href="mailto:karim.mifamikhail@gmail.com" aria-label="Email" title="Email"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg></a>
      <a href="https://wa.me/201226114191" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
      <a href="https://www.facebook.com/share/188HzFeGK4/" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
      <a href="https://www.instagram.com/bet_elfan_" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
      <a href="https://www.tiktok.com/@bet_elfan" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
      <a href="https://github.com/karimmifamikhail-arch" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C6.2 2.8 5.1 3.1 5.1 3.1a4.8 4.8 0 0 0-.1 3.5A5.1 5.1 0 0 0 3.6 10.1c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22"/></svg></a>
    </div>
  </div>
</section>
</main>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
  <button class="lb-close" id="lbClose" aria-label="Close">✕</button>
  <img alt="">
</div>

<footer>© 2026 Bet Elfan. All rights reserved.</footer>

<script>
const navToggle=document.getElementById('navToggle'),navLinks=document.getElementById('navLinks');
const setNav=o=>{navLinks.classList.toggle('open',o);navToggle.setAttribute('aria-expanded',o)};
navToggle.addEventListener('click',()=>setNav(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNav(false)));

const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
let lastFocus=null;
const closeLb=()=>{lb.classList.remove('open');lastFocus&&lastFocus.focus()};
document.querySelectorAll('.shot').forEach(f=>{
  const img=f.querySelector('img'),btn=f.querySelector('button');
  if(!img){f.classList.add('missing');return}
  const miss=()=>f.classList.add('missing');
  img.addEventListener('error',miss);
  if(img.complete&&img.naturalWidth===0)miss();
  btn.addEventListener('click',()=>{
    lastFocus=btn;lbImg.src=img.currentSrc||img.src;lbImg.alt=img.alt;
    lb.classList.add('open');document.getElementById('lbClose').focus();
  });
});
lb.addEventListener('click',closeLb);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLb();setNav(false)}});
</script>
</body>
