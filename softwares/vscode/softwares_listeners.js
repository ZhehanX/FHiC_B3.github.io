window.addEventListener('DOMContentLoaded', () => {
    // Evento para el dropdown
    const title = document.querySelector('.title_softwares');
    if (title) {
        // Evento para activar el método al presionar Enter con el tabulador
        title.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                toggleDropdown();
            }
        });
    }

    function toggleDropdown() {
        // Evento para el dropdown
        const dropdown = document.querySelector('.dropdown_list');
        dropdown.classList.toggle('active');
        const title = dropdown.querySelector('.title_softwares');
        if (dropdown.classList.contains('active')) {
            setTimeout(() => {
                title.textContent = 'Softwares';
            }, 300);
            dropdown.style.width = '350px';
            dropdown.style.height = '60px';
        } else {
            dropdown.style.width = '50px';
            dropdown.style.height = '50vh';
            title.textContent = '';
        }
    }
});


window.addEventListener('DOMContentLoaded', () => {
    // Evento para el dropdown
    const dropdown = document.querySelector('.dropdown_list');
    if (dropdown) {
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
            const title = dropdown.querySelector('.title_softwares');
            if (dropdown.classList.contains('active')) {
                setTimeout(() => {
                    title.textContent = 'Softwares';
                }, 300);
                dropdown.style.width = '350px';
                dropdown.style.height = '60px';
            } else {
                dropdown.style.width = '50px';
                dropdown.style.height = '50vh';
                title.textContent = '';
            }
        });
    }

    // Evento para SO_boxheader que apunta a la presentación de diapositivas
    const soBoxHeaders = document.querySelectorAll('.SO_boxheader');
    soBoxHeaders.forEach((soBoxHeader) => {
        soBoxHeader.addEventListener('click', (event) => {
            event.preventDefault();
            const slideshowTarget = document.querySelector('.slideshow-container');
            if (slideshowTarget) {
                slideshowTarget.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Evento para boxheader que verifica el data-target "IDES" y desplaza a software_container
    const boxHeaders = document.querySelectorAll('.boxheader');
    boxHeaders.forEach((boxHeader) => {
        boxHeader.addEventListener('click', (event) => {
            event.preventDefault();
            const target = boxHeader.dataset.target;
            if (target === 'IDES') {
                const softwareContent = document.querySelector('.software_container');
                if (softwareContent) {
                    softwareContent.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
