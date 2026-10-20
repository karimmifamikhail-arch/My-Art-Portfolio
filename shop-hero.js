(() => {
  const hero = document.querySelector('#shop-hero');
  if (!hero) return;

  const art = hero.querySelector('.shop-hero__art');
  const layers = [...hero.querySelectorAll('.sh-layer')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let releaseTimer = 0;

  function resetLayers(){
    window.clearTimeout(releaseTimer);
    layers.forEach(layer=>{
      layer.style.setProperty('--sh-x','0px');
      layer.style.setProperty('--sh-y','0px');
    });
  }

  function moveLayers(event){
    if (reducedMotion.matches) return;
    const bounds = art.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const x = Math.max(-1,Math.min(1,((event.clientX-bounds.left)/bounds.width-.5)*2));
    const y = Math.max(-1,Math.min(1,((event.clientY-bounds.top)/bounds.height-.5)*2));

    layers.forEach(layer=>{
      const depth = Number(layer.dataset.depth) || 0;
      layer.style.setProperty('--sh-x',`${x*depth*.28}px`);
      layer.style.setProperty('--sh-y',`${y*depth*.22}px`);
    });
  }

  art.addEventListener('pointermove',event=>{
    moveLayers(event);
    if (event.pointerType === 'touch'){
      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(resetLayers,900);
    }
  });
  art.addEventListener('pointerleave',event=>{
    if (event.pointerType !== 'touch') resetLayers();
  });
  art.addEventListener('pointerup',event=>{
    if (event.pointerType === 'touch') releaseTimer = window.setTimeout(resetLayers,900);
  });
  art.addEventListener('pointercancel',resetLayers);
  window.addEventListener('blur',resetLayers);

  hero.querySelectorAll('[data-shop-scroll]').forEach(link=>{
    link.addEventListener('click',event=>{
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'start'});
      history.replaceState(null,'',link.getAttribute('href'));
    });
  });
})();