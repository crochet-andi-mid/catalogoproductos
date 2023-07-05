// Obtener todos los botones de "WhatsApp" en las tarjetas de producto
var whatsappButtons = document.querySelectorAll('.whatsapp-button');

// Agregar un manejador de eventos a cada botón de "WhatsApp"
whatsappButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var productName = productCard.querySelector('h2').textContent;
    var productPrice = productCard.querySelector('.price').textContent;
    var productDescription = productCard.querySelector('.description').textContent;
    var productImage = productCard.querySelector('img').src;

    // Modificar la URL de la imagen para que sea relativa al archivo HTML
    var imageURL = window.location.href.replace('index.html', productImage);

    var whatsappURL = 'https://api.whatsapp.com/send?text=' + encodeURIComponent('¡Hola! Estoy interesado en el producto ' + productName + '. Precio: ' + productPrice + '. Descripción: ' + productDescription + '. Adjunto una imagen: ' + imageURL);

    // Abrir la ventana de WhatsApp con el mensaje predefinido
    window.open(whatsappURL);
  });
});