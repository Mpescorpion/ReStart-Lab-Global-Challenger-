// integrantes_animation.js
document.addEventListener('DOMContentLoaded', () => {
  // sinaliza que JS existe (para animações CSS)
  document.body.classList.add('js');

  // Hero text reveal (small delay)
  const heroText = document.querySelector('.hero-integrantes .hero-text');
  if (heroText) {
    setTimeout(() => heroText.classList.add('visible'), 140);
  }

  // IntersectionObserver para .fade-up
  const fadeTargets = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeTargets.forEach(t => io.observe(t));
  } else {
    // fallback
    fadeTargets.forEach(t => t.classList.add('visible'));
  }
});
