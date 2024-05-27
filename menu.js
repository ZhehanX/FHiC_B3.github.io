window.addEventListener('DOMContentLoaded', (event) => {

    // Obtener los elementos con la clase boxheader
    const boxHeaders = document.querySelectorAll('.boxheader');

    // Función para manejar el evento keydown en los elementos boxheader
    function handleKeyDown(event) {
        // Verificar si la tecla presionada es Enter
        if (event.key === 'Enter') {
            // Obtener el enlace dentro del elemento boxheader
            const link = this.getAttribute('href');
            // Redirigir a la URL del enlace
            window.location.href = link;
        }
    }

    // Asignar el evento keydown a cada elemento boxheader
    boxHeaders.forEach(boxHeader => {
        boxHeader.addEventListener('keydown', handleKeyDown);
    });
});


//LILSTENER PARA LOS ENLACES DEL HOME
window.addEventListener('DOMContentLoaded', (event) => {
    // Obtener el enlace y el elemento que desencadena el evento (por ejemplo, un botón o una etiqueta)
    const link = document.querySelector('.githubLink');
    const triggerGitHUB = document.querySelector('.githubBox');

    // Escuchar el evento keydown en el elemento que desencadena el evento
    triggerGitHUB.addEventListener('keydown', function(event) {
        // Verificar si la tecla presionada es Enter
        if (event.key === 'Enter') {
            // Simular clic en el enlace
            link.click();
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const installSoftwareLink = document.querySelector('.nav-link[href="#softwares"]');

    // Asegúrate de que el enlace exista antes de agregar el evento
    if (installSoftwareLink) {
        installSoftwareLink.addEventListener('click', (event) => {
            // Prevenir el comportamiento por defecto para un control total sobre el scroll
            event.preventDefault();

            // Usar `scrollIntoView` para un desplazamiento suave
            const target = document.querySelector('#softwares'); // Encuentra la sección
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
            }
        });
    }
});
