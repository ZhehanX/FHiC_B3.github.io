let os = 'Windows';

window.onload = function() {
    // Obtener el elemento correspondiente a Windows
    const windowsElement = document.querySelector('.SO_boxheader[data-target="Windows"]');
    // Llamar a la función updateSpecification() con el elemento de Windows
    updateSpecification(windowsElement);
};

function updateSpecification(element) {
    
    slidesActuals = document.getElementsByClassName("mySlides");

    const target = element.dataset.target; // Obtiene el valor del atributo data-target
    const specification = document.querySelector('.content-specification'); // Selecciona el contenido
    const downloadLink = document.querySelector('.download-link'); // Selecciona el enlace de descarga
    let content;
    let link;
        
    content = 'Aprender a programar puede resultar intimidante, así que prepárate para el éxito con una herramienta diseñada para ti. Visual Studio Code es un editor de código gratuito que te ayuda a empezar a programar rápidamente. Úsalo para programar en cualquier lenguaje de programación, sin necesidad de cambiar de editor. Visual Studio Code ofrece soporte para muchos lenguajes, incluyendo Python, Java, C++, JavaScript y más. ¿Listo para empezar?';
    switch (target) {
        case 'Windows':
            link = 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user'; // Enlace para descargar
            os = 'Windows';
            break;
        case 'Linux':
            link = 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'; // Enlace para descargar
            os = 'Linux';
            break;
        case 'Mac':
            link = 'https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal'; // Enlace para descargar
            os = 'Mac';
            break;
        default:
            content = 'Selecciona un sistema operativo para ver especificaciones.';
            link = '#'; // Enlace predeterminado si no se selecciona nada
    }
    
    specification.textContent = content; // Actualiza el contenido
    downloadLink.href = link; // Actualiza el enlace

    slideIndex=1; // Resetear el slideIndex
    showSlides(slideIndex, os); // Mostrar los Slides correspondiente al sistema operativo
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        updateSpecification(event.target);
    }
}


let slideIndex = 1;
function plusSlidesKey(n, event){
    if (event.key === 'Enter') {
        plusSlides(n);
    }
}
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n, os); // Selecciona el contenido
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n, os);
}

function showSlides(n, os) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    slidesCopy = Array.from(slides);

    // Eliminar los slides que no corresponden al sistema operativo
    for (i = slidesCopy.length - 1; i >= 0; i--) {
        if (slidesCopy[i].dataset.os !== os) {
            slidesCopy.splice(i, 1);
        }
    }

    h3 = document.querySelector('.SO_specification h3');
    h3.textContent = os;

    if (n > slidesCopy.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesCopy.length}


    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slidesCopy[slideIndex-1].style.display = "block";
    slidesCopy[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}