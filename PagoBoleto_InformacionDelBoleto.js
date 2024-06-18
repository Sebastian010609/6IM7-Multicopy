document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0; // El índice de la primera imagen

    function changeImage(step) {
        const nextIndex = (currentIndex + step + images.length) % images.length;
        animateCarousel(currentIndex, nextIndex);
        currentIndex = nextIndex;
    }

    function animateCarousel(oldIndex, newIndex) {
        images[oldIndex].classList.remove('active');
        images[oldIndex].style.opacity = 0;
        images[newIndex].classList.add('active');
        images[newIndex].style.display = 'block'; // Asegúrate de que se muestre
        images[newIndex].style.opacity = 1;

        // Espera para iniciar la transición de salida para evitar cortes visuales
        setTimeout(() => {
            images[oldIndex].style.display = 'none';
        }, 500); // Coincide con la duración de la transición de opacidad
    }

    // Inicializa la primera imagen como visible
    images[currentIndex].classList.add('active');
    images[currentIndex].style.display = 'block';
    images[currentIndex].style.opacity = 1;

    document.querySelector('.next-button').addEventListener('click', () => {
        changeImage(1);
        // Redirecciona al siguiente documento HTML
        window.location.href = 'PagoBoleto_SeleccionarAsiento.html';
    });
    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));

    // Cambia automáticamente a la siguiente imagen cada 7 segundos
    setInterval(() => changeImage(1), 5000);
});




