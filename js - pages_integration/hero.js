// hero.js — text slider (rotaciona frases do hero)
// HTML: <div class="text-slider"><div class="text-slide">Frase 1</div> ... </div>
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.text-slider');
  if(!slider) return;

  const slides = Array.from(slider.querySelectorAll('.text-slide'));
  let idx = 0;
  const interval = 4200; // ms
  let timer;

  const show = (i) => {
    slides.forEach((s, j) => {
      s.classList.toggle('active', j === i);
    });
  };

  const start = () => {
    show(idx);
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, interval);
  };

  const stop = () => {
    clearInterval(timer);
  };

  // start autoplay
  start();

  // pause on hover (optional)
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  // optional: add prev/next controls if exist
  const prev = document.getElementById('heroPrev');
  const next = document.getElementById('heroNext');
  if(prev) prev.addEventListener('click', () => { stop(); idx = (idx-1+slides.length)%slides.length; show(idx); start(); });
  if(next) next.addEventListener('click', () => { stop(); idx = (idx+1)%slides.length; show(idx); start(); });
});
