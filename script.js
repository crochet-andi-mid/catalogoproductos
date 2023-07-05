// Obtener todos los botones de "Like" en las tarjetas de producto
var likeButtons = document.querySelectorAll('.like-button');

// Agregar un manejador de eventos a cada botón de "Like"
likeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var likeCount = productCard.querySelector('.like-count');

    // Incrementar el contador de likes
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
  });
});

// Obtener todos los botones de "Review" en las tarjetas de producto
var reviewButtons = document.querySelectorAll('.review-button');

// Agregar un manejador de eventos a cada botón de "Review"
reviewButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var reviewCount = productCard.querySelector('.review-count');

    // Incrementar el contador de reseñas
    var currentReviews = parseInt(reviewCount.textContent);
    reviewCount.textContent = currentReviews + 1;
  });
});

// Función para enviar un mensaje de WhatsApp
function enviarWhatsapp(numero, nombreProducto, precio, descripcion) {
  var mensaje = "¡Hola! Estoy interesado en el producto: " +
    nombreProducto +
    "%0A%0APrecio: " +
    precio +
    "%0A%0ADescripción: " +
    descripcion +
    "%0A%0A¿Podrías brindarme más información?";

  var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensaje);
  window.open(url);
}