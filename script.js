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