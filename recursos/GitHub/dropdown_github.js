const dropdown = document.querySelector('.dropdown_list');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    // Obtener el elemento del título dentro del dropdown
    var title = dropdown.querySelector(".title_github");
    
     // Cambiar el texto entre "Softwares" y vacío según el estado de la clase "active"
     if (dropdown.classList.contains('active')) {
        setTimeout(() => {
            title.textContent = "GitHub"; // Dejar vacío cuando el dropdown está activo
        }, 300); // Delay de 500 milisegundos (0.5 segundos)
        dropdown.style.width = "350px"; // Cambiar el ancho a 100px cuando el dropdown está activo
        dropdown.style.height = "60px";
    } else {
            dropdown.style.width = "100px"; // Cambiar el ancho a 100px después de un retraso
        dropdown.style.height = "60px";
        title.textContent = ""; 
    }
});

function updateSpecification(element) {
    const target = element.dataset.target; // Obtiene el valor del atributo data-target
    const specification = document.querySelector('.SO_specification h3'); // Selecciona el elemento SO_specification
    specification.textContent = "Especificaciones de " + target; // Actualiza el contenido del elemento SO_specification
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        updateSpecification(event.target);
    }
}