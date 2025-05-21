document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Simula envío
    const mensaje = document.getElementById('mensaje-enviado');
    mensaje.textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
    mensaje.style.color = "green";
  
    // Limpia formulario
    this.reset();
  });
  