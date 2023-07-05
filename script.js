function sendWhatsApp(phoneNumber, productName, imageName) {
  var message = "¡Hola! Estoy interesado en el " + productName + ". ¿Podrías proporcionarme más información?";
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  window.open(url);
  
  var image = new Image();
  image.src = imageName;
  image.addEventListener('load', function() {
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = imageName;
    link.click();
  });
}