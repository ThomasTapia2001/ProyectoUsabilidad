document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.getElementById("quote-button");
    const newsText = document.getElementById("news-text");
  
    quoteButton.addEventListener("click", function () {
      // Aquí puedes agregar la lógica para procesar la cotización del anuncio
      alert("Cotización solicitada: " + newsText.value);
    });
  });
  