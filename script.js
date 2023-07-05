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

    // Crear un enlace dinámico con los datos del producto
    var whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent('¡Hola! Estoy interesado en el producto ' + productName + '. Precio: ' + productPrice + '. Descripción: ' + productDescription);
    whatsappLink.target = '_blank';

    // Crear una imagen oculta para adjuntarla al enlace de WhatsApp
    var imageElement = document.createElement('img');
    imageElement.src = productImage;
    imageElement.style.display = 'none';

    // Adjuntar la imagen al enlace de WhatsApp
    whatsappLink.appendChild(imageElement);

    // Simular un clic en el enlace de WhatsApp para abrir la aplicación
    var event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    whatsappLink.dispatchEvent(event);
  });
});