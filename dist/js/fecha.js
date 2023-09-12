// Obtén la referencia al elemento <p> donde mostrarás la fecha en tiempo real.
const dateInfoElement = document.getElementById('date-info');

// Función para obtener y formatear la fecha en tiempo real.
function updateDateInfo() {
    const now = new Date();
    const dayOfMonth = now.getDate(); // Número del día del mes.
    const monthIndex = now.getMonth(); // Índice del mes (0 = enero, 11 = diciembre).
    const year = now.getFullYear(); // Año.

    // Array de nombres de meses.
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Obtiene el nombre del mes a partir del array.
    const month = months[monthIndex];

    // Crea el formato deseado para la fecha.
    const formattedDate = `${month}, ${dayOfMonth} de ${year}`;

    // Actualiza el contenido del elemento <p> con la fecha en tiempo real.
    dateInfoElement.textContent = formattedDate;
}

// Actualiza la fecha inicial.
updateDateInfo();

// Actualiza la fecha cada segundo (1000 ms).
setInterval(updateDateInfo, 1000);
