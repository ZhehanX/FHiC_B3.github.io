document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "./img/00.png",
        "./img/01.png",
        "./img/02.png",
        "./img/03.png",
        "./img/04.png",
        "./img/05.png"
    ];
    const descriptions = [
        "Paso 1: Para iniciar una pregunta haga click en el botton ask question.",
        "Paso 2: Ahora ponle un titulo a tu pregunta",
        "Paso 3: Detalla el problema que te has encontrado",
        "Paso 4: Describe tus intentos y lo que esperas de respuesta",
        "Paso 5: Añade un tag, java, python, c++, etc.",
        "Paso 6: Revisa que no haya alguien que progunta la misma pregunta que tu."
    ]
    let currentImageIndex = 0;
    const imgElement = document.querySelector('.tutorial_container img');
    const btnPrev = document.querySelector('.btn_prev');
    const btnNext = document.querySelector('.btn_next');
    const descriptionImg = document.querySelector('.tutorial_container p');

    btnPrev.addEventListener('click', function() {
        if (currentImageIndex != 0){
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            imgElement.src = images[currentImageIndex];
            descriptionImg.innerText = descriptions[currentImageIndex];
        }
    });

    btnNext.addEventListener('click', function() {
        if (currentImageIndex != images.length-1){
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imgElement.src = images[currentImageIndex];
            descriptionImg.innerText = descriptions[currentImageIndex];
        }
    });
});