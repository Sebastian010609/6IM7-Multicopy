document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var dropdownMenu = document.getElementById('dropdownMenu');

    function showMenu() {
        dropdownMenu.style.display = 'block';
    }

    function hideMenu() {
        dropdownMenu.style.display = 'none';
    }

    menuButton.addEventListener('mouseenter', showMenu);
    menuButton.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!dropdownMenu.matches(':hover')) {
                hideMenu();
            }
        }, 200);
    });

    dropdownMenu.addEventListener('mouseenter', showMenu);
    dropdownMenu.addEventListener('mouseleave', hideMenu);

    // Aquí también puedes incluir tu JavaScript para el modal si es necesario
    document.getElementById('toggleDetails').addEventListener('click', function() {
        document.getElementById('detailsModal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('detailsModal').style.display = 'none';
    });

    function closeModal() {
        document.getElementById('detailsModal').style.display = 'none';
    }

    window.closeModal = closeModal; // Asegúrate de que closeModal es accesible globalmente
});
