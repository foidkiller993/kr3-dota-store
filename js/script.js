document.addEventListener('DOMContentLoaded', () => {
    // Имитация покупки
    const buyButtons = document.querySelectorAll('.btn--buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.product-card');
            const productName = card.querySelector('.product-card__title').innerText;
            
            alert(`Товар "${productName}" добавлен в корзину!`);
            
            button.innerText = 'В корзине';
            button.style.backgroundColor = '#4CAF50';
            button.style.color = '#fff';
            button.style.borderColor = '#4CAF50';
            button.disabled = true;
        });
    });

    // Кнопка "Наверх"
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});