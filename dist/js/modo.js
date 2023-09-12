document.addEventListener("DOMContentLoaded", function() {
    const modoOscuroBtn = document.getElementById("modo-oscuro");
    const modoClaroBtn = document.getElementById("modo-claro");
    const body = document.body;

    modoOscuroBtn.addEventListener("click", function() {
        body.classList.remove("modo-claro");
        body.classList.add("modo-oscuro");
    });

    modoClaroBtn.addEventListener("click", function() {
        body.classList.remove("modo-oscuro");
        body.classList.add("modo-claro");
    });
});
