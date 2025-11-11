// Efecto suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animación al cargar
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});


const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("mensaje enviado");
    form.reset();
});


window.addEventListener('DOMContentLoaded', () => {
  const wa = document.getElementById('whatsapp-float');
  wa.style.display = 'none'; // lo oculpa

  setTimeout(() => {
    wa.style.display = 'flex'; // aparece despues de unos segundos
  }, 3000);
});