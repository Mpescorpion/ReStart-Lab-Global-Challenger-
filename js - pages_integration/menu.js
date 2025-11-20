// menu.js — menu responsivo simples (estrutura semântica)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-menu');
  const nav = document.getElementById('main-nav');
  if(!btn || !nav) return;

  btn.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    nav.style.display = opened ? 'block' : 'none';
    btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  // close on link click for mobile
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if(window.innerWidth < 768){
      nav.classList.remove('open');
      nav.style.display = 'none';
    }
  }));
});
