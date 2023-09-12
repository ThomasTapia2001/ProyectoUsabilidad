
    window.addEventListener('scroll', function () {
        var footer = document.getElementById('footer');
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        // Verificar si el usuario ha llegado al final de la página
        if (windowHeight + window.pageYOffset >= documentHeight - 20) {
            footer.style.display = 'block'; // Mostrar el footer
        } else {
            footer.style.display = 'none'; // Ocultar el footer
        }
    });

