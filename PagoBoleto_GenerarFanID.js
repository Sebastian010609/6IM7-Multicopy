document.addEventListener('DOMContentLoaded', function() {
    var btnSiguiente = document.querySelector('.next-button'); // Asegúrate de que el selector coincida con tu botón
    btnSiguiente.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        window.location.href = 'PagoBoleto_FinalizarCompra.html'; // Redirecciona al usuario al archivo siguiente.html
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Array con las URLs de cada paso en el orden de los pasos
    var stepUrls = [
        "PagoBoleto_InformacionDelBoleto.html",
        "PagoBoleto_SeleccionarAsiento.html",
        "PagoBoleto_MetodoPago.html",
        "PagoBoleto_GenerarFanID.html",
        "PagoBoleto_FinalizarCompra.html"
    ];

    var steps = document.querySelectorAll('.step');
    var currentStepIndex = findActiveStepIndex(steps);

    steps.forEach(function(step, index) {
        step.addEventListener('click', function() {
            // Permitir la navegación solo si el paso objetivo es anterior al actual
            if (index < currentStepIndex) {
                window.location.href = stepUrls[index];
            }
        });
    });

    // Función para determinar el índice del paso actual basado en la clase 'active'
    function findActiveStepIndex(steps) {
        for (var i = 0; i < steps.length; i++) {
            if (steps[i].classList.contains('active')) {
                return i;
            }
        }
        return -1; // Devuelve -1 si no se encuentra un paso activo
    }
});
