
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "img/04branch_created.png",
        // Add more image paths here as needed
        "img/05make_changes.png",
        "img/06commit.png",
        "img/09GitHub_changes.png"
    ];
    const descriptions = [
        "Paso 1: Asegurar que esté en su branca, si no crea una.",
        "Paso 2: Añadir los nuevos códigos",
        "Paso 3: Hacer un commit explicando que cambios ha hecho.",
        "Paso 4: Comprueba que los cambios han subido al GitHub."
    ]
    let currentImageIndex = 0;
    const imgElement = document.querySelector('.tutorial_container img');
    const btnPrev = document.querySelector('.btn_prev');
    const btnNext = document.querySelector('.btn_next');
    const descriptionImg = document.querySelector('.tutorial_container p');

    btnPrev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentImageIndex];
        descriptionImg.innerText = descriptions[currentImageIndex];
    });

    btnNext.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
        descriptionImg.innerText = descriptions[currentImageIndex];
    });
});
     