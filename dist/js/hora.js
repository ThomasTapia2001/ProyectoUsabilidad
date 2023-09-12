// Obtén la referencia al elemento <p> donde mostrarás la fecha y hora.
const dateTimeElement = document.getElementById('date-time');

// Función para dar formato a la fecha en el estilo deseado.
function formatDate(date) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${dayOfMonth} de ${month} del ${year}`;
}

// Función para dar formato a la hora en el estilo deseado.
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Función para actualizar la fecha y hora en tiempo real.
function updateDateTime() {
    const now = new Date();
    const formattedDate = formatDate(now);
    const formattedTime = formatTime(now);
    dateTimeElement.textContent = `${formattedDate} - ${formattedTime}`;
}

// Actualiza la fecha y hora inicial.
updateDateTime();

// Actualiza la fecha y hora cada segundo (1000 ms).
setInterval(updateDateTime, 1000);
