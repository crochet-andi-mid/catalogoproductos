function sendWhatsApp(phoneNumber, productName, imageName) {
  var message = "¡Hola! Estoy interesado en el " + productName + ". ¿Podrías proporcionarme más información?";
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

  var link = document.createElement('a');
  link.href = url;
  link.target = "_blank";
  link.click();

  setTimeout(function() {
    var formData = new FormData();
    formData.append("image", imageName);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.whatsapp.com/send");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(formData);
  }, 1000);
}
