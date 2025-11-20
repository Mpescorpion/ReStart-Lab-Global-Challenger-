// pages_animation.js — IntersectionObserver generic for fade-up / fade-in and scroll-to-top
document.addEventListener('DOMContentLoaded', () => {
  // mark JS available
  document.body.classList.add('js');

  // intersection observer for .fade-up and .fade-in
  const targets = document.querySelectorAll('.fade-up, .fade-in');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('visible'));
  }

  // small hero-text reveal (if present)
  const heroText = document.querySelector('.hero-left');
  if(heroText) setTimeout(()=> heroText.classList.add('visible'), 140);

  // SCROLL TO TOP button
  (function(){
    const btn = document.getElementById('scrollTopBtn');
    if(!btn) return;
    window.addEventListener('scroll', () => {
      const sc = window.pageYOffset || document.documentElement.scrollTop;
      btn.style.display = sc > 220 ? 'flex' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  })();
});
