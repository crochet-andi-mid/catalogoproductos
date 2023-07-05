function sendWhatsApp(phoneNumber, productName, imageName) {
  var message = "¡Hola! Estoy interesado en el " + productName + ". ¿Podrías proporcionarme más información?";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  var link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
}

var likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var likeCount = productCard.querySelector('.like-count');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
  });
});

var reviewButtons = document.querySelectorAll('.review-button');
reviewButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var reviewCount = productCard.querySelector('.review-count');
    var currentReviews = parseInt(reviewCount.textContent);
    reviewCount.textContent = currentReviews + 1;
  });
});
