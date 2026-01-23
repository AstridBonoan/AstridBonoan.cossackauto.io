(function(){
  function insertFooter(){
    try{
      var footer = document.querySelector('.site-footer');
      if(!footer) return false;
      var existing = footer.querySelector('img');
      if(existing){
        existing.setAttribute('data-deployed-footer','1');
        existing.src = './images/footer.png';
        existing.alt = 'footer image';
        existing.className = 'h-14 w-14 opacity-90';
        existing.style.maxWidth = '100%';
        existing.style.height = 'auto';
        existing.style.marginTop = '8px';
        return true;
      }
      var img = document.createElement('img');
      img.src = './images/footer.png';
      img.alt = 'footer image';
      img.className = 'h-14 w-14 opacity-90';
      img.setAttribute('data-deployed-footer','1');
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.marginTop = '8px';
      footer.appendChild(img);
      return true;
    }catch(e){console && console.error && console.error(e); return false;}
  }

  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    insertFooter();
  } else {
    document.addEventListener('DOMContentLoaded', insertFooter);
  }

  // Also watch for the footer to be rendered later by React (short window)
  var injected = false;
  if(!insertFooter()){
    var mo = new MutationObserver(function(mutations){
      if(insertFooter()){
        injected = true;
        try{ mo.disconnect(); }catch(e){}
      }
    });
    mo.observe(document.documentElement || document.body, {childList:true,subtree:true});

    // Also observe attribute changes on any footer <img> so React re-renders don't revert the src
    var attrObserver = new MutationObserver(function(muts){
      muts.forEach(function(m){
        try{
          var t = m.target;
          if(t && t.tagName === 'IMG'){
            if(t.getAttribute('data-deployed-footer') !== '1' || t.src.indexOf('images/footer.png')===-1){
              t.setAttribute('data-deployed-footer','1');
              t.src = './images/footer.png';
              t.alt = 'footer image';
              t.className = 'h-14 w-14 opacity-90';
            }
          }
        }catch(e){}
      });
    });

    // Attach to footer when it appears
    var footerWatch = new MutationObserver(function(muts){
      var f = document.querySelector('.site-footer');
      if(f){
        // observe whole footer subtree for attribute changes on imgs
        attrObserver.observe(f, {subtree:true, attributes:true, attributeFilter:['src','alt','class']});
        try{ footerWatch.disconnect(); }catch(e){}
      }
    });
    footerWatch.observe(document.documentElement || document.body, {childList:true,subtree:true});

    // safety timeout to stop observers
    setTimeout(function(){ try{ mo.disconnect(); footerWatch.disconnect(); attrObserver.disconnect(); }catch(e){} }, 10000);
  }
})();
