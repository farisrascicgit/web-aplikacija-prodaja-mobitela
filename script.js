document.addEventListener('DOMContentLoaded', function() {
    // Modalni prozor
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.kupi-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const name = product.querySelector('h3').textContent;
            const price = product.querySelector('p').textContent;
            const memory = product.querySelector('select[id^="memorija"]').value;
            const color = product.querySelector('select[id^="boja"]').value;

            modalText.textContent = `Kupujete ${name} s ${memory} memorijom i bojom ${color}. ${price}`;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Interakcije dugmadi - promjena boje i animacija
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#333';
            button.style.color = '#fff';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#4CAF50';
            button.style.color = '#fff';
        });

        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
