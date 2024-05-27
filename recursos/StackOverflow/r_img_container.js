document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "./img/R_01.png",
        "./img/R_02.png",
        "./img/R_03.png"
    ];
    const descriptions = [
        "Paso 1: Para responder una pregunta haga click en la pregunta que quieras responder.",
        "Paso 2: Ahora baja hacia a bajo",
        "Paso 3: Finalmente pon tu respuesta dentro del cuadro de texto"
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