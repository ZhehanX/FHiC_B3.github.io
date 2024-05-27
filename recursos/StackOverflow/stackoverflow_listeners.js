window.addEventListener('DOMContentLoaded', () => {
    // Evento para el dropdown
    const dropdown = document.querySelector('.dropdown_list');
    if (dropdown) {
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
            const title = dropdown.querySelector('.title_softwares');
            if (dropdown.classList.contains('active')) {
                setTimeout(() => {
                    title.textContent = 'Stack Overflow';
                }, 300);
                dropdown.style.width = '350px';
                dropdown.style.height = '60px';
            } else {
                dropdown.style.width = '100px';
                dropdown.style.height = '50vh';
                title.textContent = '';
            }
        });
    }

});
