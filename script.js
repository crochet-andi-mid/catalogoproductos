// Obtener todos los botones de "Contactar por WhatsApp"
var whatsappButtons = document.querySelectorAll('.whatsapp-button');

// Agregar un manejador de eventos a cada botón de "Contactar por WhatsApp"
whatsappButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productCard = this.parentNode.parentNode;
    var nombreProducto = productCard.querySelector('h2').textContent;
    var precio = productCard.querySelector('.price').textContent;
    var descripcion = productCard.querySelector('.description').textContent;

    enviarWhatsapp('+529844334844', nombreProducto, precio, descripcion);
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

  var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numero) + "&text=" + encodeURIComponent(mensaje);
  window.open(url);
}