/* VeraVox site theme (see theme.css).

   Loaded synchronously in <head> by every page, so the reader's choice is on
   <html> before the first paint and a page never flashes the other theme.
   Dark is the default. The choice is remembered on this device only, under
   one key for the whole site, so it follows the reader from page to page;
   if storage is unavailable it lasts until the page is closed. */
(function(){
  var KEY = 'vv-theme';
  var root = document.documentElement;

  function stored(){
    try { return localStorage.getItem(KEY); } catch(e) { return null; }
  }
  function apply(theme){
    if(theme === 'light'){ root.setAttribute('data-theme', 'light'); }
    else { root.removeAttribute('data-theme'); }
  }
  function current(){
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  // The switch names what a click does, like its icon.
  function paint(){
    var label = current() === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    var switches = document.querySelectorAll('.theme-switch');
    for(var i = 0; i < switches.length; i++){
      switches[i].setAttribute('aria-label', label);
      switches[i].setAttribute('title', label);
    }
  }
  // Pages that draw in script (the home's canvases) listen for vv-themechange
  // and redraw in the new palette.
  function change(theme){
    root.classList.add('theme-swap');
    apply(theme);
    paint();
    document.dispatchEvent(new CustomEvent('vv-themechange', { detail: { theme: current() } }));
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ root.classList.remove('theme-swap'); });
    });
  }

  apply(stored());

  document.addEventListener('DOMContentLoaded', function(){
    var switches = document.querySelectorAll('.theme-switch');
    for(var i = 0; i < switches.length; i++){
      switches[i].addEventListener('click', function(){
        var next = current() === 'light' ? 'dark' : 'light';
        try { localStorage.setItem(KEY, next); } catch(e) {}
        change(next);
      });
    }
    paint();
  });

  // A choice made in another tab of the site is followed here too.
  window.addEventListener('storage', function(e){
    if(e.key === KEY && (e.newValue === 'light') !== (current() === 'light')){
      change(e.newValue);
    }
  });
})();
