function sendWhatsApp(phoneNumber, productName, imageName) {
  var message = "¡Hola! Estoy interesado en el " + productName + ". ¿Podrías proporcionarme más información?";
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

  var link = document.createElement('a');
  link.href = url;
  link.target = "_blank";
  link.click();

  setTimeout(function() {
    var image = new Image();
    image.src = imageName;

    image.addEventListener('load', function() {
      var canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      canvas.toBlob(function(blob) {
        var formData = new FormData();
        formData.append("image", blob, imageName);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.whatsapp.com/send");
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(formData);
      });
    });
  }, 1000);
}