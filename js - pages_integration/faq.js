// js/pages_integration/faq.js
// Ativa animações e controla o comportamento das perguntas do FAQ

document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     ANIMAÇÃO COM INTERSECTION OBSERVER
  ============================= */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".faq-item").forEach(item => {
    observer.observe(item);
  });

  /* ============================
     ABRIR / FECHAR PERGUNTAS
  ============================= */
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const header = item.querySelector(".faq-question");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // fecha todos antes de abrir outro
      items.forEach(i => i.classList.remove("open")); 

      // se não estava aberto, abre agora
      if (!isOpen) item.classList.add("open");
    });
  });

});

