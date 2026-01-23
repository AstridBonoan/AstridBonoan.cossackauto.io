(function(){
  function fixUrl(url){
    if(!url) return null;
    // look for the offending segment and extract filename
    const marker = 'cossackauto.github.io/assets/';
    const i = url.indexOf(marker);
    if(i === -1) return null;
    const filename = url.slice(i + marker.length).split('?')[0].split('#')[0];
    return './assets/' + filename;
  }

  function tryFixElement(el){
    try{
      if(el.tagName === 'IMG' || el.tagName === 'SOURCE'){
        const src = el.getAttribute('src') || el.src;
        const fixed = fixUrl(src);
        if(fixed) el.src = fixed;
      }
      // background-image in style attribute
      const bg = el.style && el.style.backgroundImage;
      if(bg && bg.indexOf('cossackauto.github.io/assets/')!==-1){
        const start = bg.indexOf('cossackauto.github.io/assets/');
        const after = bg.slice(start);
        const filename = after.split('/').slice(1).join('/').split(/[\)"']/)[0];
        el.style.backgroundImage = 'url("./assets/'+filename+'")';
      }
    }catch(e){/* ignore */}
  }

  function scanAndFix(root){
    root.querySelectorAll && root.querySelectorAll('img,source').forEach(tryFixElement);
    // also quick pass for any element with inline style
    root.querySelectorAll && root.querySelectorAll('[style]').forEach(tryFixElement);
  }

  // initial pass
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    scanAndFix(document);
  } else {
    document.addEventListener('DOMContentLoaded', function(){ scanAndFix(document); });
  }

  // observe DOM additions for a short window
  const mo = new MutationObserver(function(m){
    m.forEach(rep => {
      rep.addedNodes && rep.addedNodes.forEach(node => {
        if(node.nodeType===1) tryFixElement(node), scanAndFix(node);
      });
    });
  });
  mo.observe(document.documentElement || document.body, {childList:true,subtree:true});
  // stop observing after 8s
  setTimeout(()=>mo.disconnect(),8000);
})();
