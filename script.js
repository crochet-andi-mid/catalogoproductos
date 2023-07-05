// Obtener todos los botones de "Enviar WhatsApp"
var whatsappButtons = document.querySelectorAll('.whatsapp-button');

// Agregar un manejador de eventos a cada botón de "Enviar WhatsApp"
whatsappButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var productName = productCard.querySelector('h2').textContent;
    var productImageSrc = productCard.querySelector('img').getAttribute('src');
    var message = '¡Hola! Estoy interesado en el producto ' + productName + '.';

    // Crear un enlace de WhatsApp con la imagen adjunta
    var whatsappLink = 'https://wa.me/+529844334844?text=' + encodeURIComponent(message) + '&attachment=' + encodeURIComponent(productImageSrc);
    
    // Abrir enlace de WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');
  });
});
