

$(document).ready(function() {
    $('#miTabla').DataTable({
        // Puedes agregar configuraciones opcionales aquí
        "paging": true,           // Habilitar paginación
        "searching": true,        // Habilitar barra de búsqueda
        "ordering": true,         // Habilitar ordenación de columnas
        "info": true              // Mostrar información de la tabla
    });
});
