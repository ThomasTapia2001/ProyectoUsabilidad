document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.getElementById("quote-button");
    const newsText = document.getElementById("news-text");
  
    quoteButton.addEventListener("click", function () {
      // Aquí puedes agregar la lógica para procesar la cotización del anuncio
      alert("Cotización solicitada: " + newsText.value);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Utiliza una función de XMLHttpRequest para cargar el contenido del footer.html
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "footer.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Cuando se complete la solicitud y tenga éxito, agrega el contenido al div
            document.getElementById("footer-container").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});  