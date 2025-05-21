document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = this;
    const mensaje = document.getElementById('mensaje-enviado');
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/mldbkdza', { // Cambia por tu endpoint
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            mensaje.textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
            mensaje.style.color = "green";
            form.reset();
        } else {
            mensaje.textContent = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
            mensaje.style.color = "red";
        }
    } catch (error) {
        mensaje.textContent = "Hubo un error de conexión. Intenta de nuevo.";
        mensaje.style.color = "red";
    }
});
