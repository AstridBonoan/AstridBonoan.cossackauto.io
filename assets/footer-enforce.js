// Repeatedly enforce footer image for a short window to survive React re-renders
(function(){
  function setFooterImg(){
    try{
      var f = document.querySelector('.site-footer');
      if(!f) return false;
      var img = f.querySelector('img');
      if(!img){ img = document.createElement('img'); f.appendChild(img); }
      img.setAttribute('data-deployed-footer','1');
      img.src = './images/footer.png';
      img.alt = 'footer image';
      img.className = 'h-14 w-14 opacity-90';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.marginTop = '8px';
      return true;
    }catch(e){return false;}
  }

  var iv = setInterval(function(){ if(setFooterImg()){ /* keep trying until timeout */ } }, 300);
  setTimeout(function(){ try{ clearInterval(iv); }catch(e){} }, 60000);
})();
