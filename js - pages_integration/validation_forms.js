// validation_forms js — validação simples
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if(!form) return;
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if(!name || !email || !message){
      feedback.textContent = 'Por favor, preencha todos os campos.';
      feedback.style.color = 'crimson';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      feedback.textContent = 'E-mail inválido.';
      feedback.style.color = 'crimson';
      return;
    }

    feedback.textContent = 'Enviando...';
    feedback.style.color = varOr('#6B7280');
    setTimeout(() => {
      feedback.textContent = 'Mensagem enviada com sucesso! Obrigado.';
      feedback.style.color = 'green';
      form.reset();
    }, 900);
  });

  function varOr(fallback){ try { return getComputedStyle(document.documentElement).getPropertyValue('--muted') || fallback; } catch(e) { return fallback; } }
});
