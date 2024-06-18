function showPaymentModal(method) {
    var modal = document.getElementById('paymentModal');
    var form = document.getElementById('paymentForm');
    modal.style.display = 'block';
    form.onsubmit = function(event) {
        event.preventDefault();
        payWithMethod(method);
    }
}

function closeModal() {
    var modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}

function payWithMethod(method) {
    alert('Datos aceptados con éxito');
    closeModal();
    showNextButton();
}

function showNextButton() {
    var nextButtonDiv = document.querySelector('.btnSiguiente');
    nextButtonDiv.style.display = 'block'; 
}


function showNextButton() {
    var nextButtonDiv = document.querySelector('.btnSiguiente');
    nextButtonDiv.style.display = 'block'; // Muestra el botón "Siguiente"
    nextButtonDiv.querySelector('.next-button').addEventListener('click', function() {
        window.location.href = 'PagoBoleto_GenerarFanID.html'; // Cambia 'siguiente_pagina.html' por la URL a la que deseas redirigir
    });
}


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
