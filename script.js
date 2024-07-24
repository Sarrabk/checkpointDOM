document.addEventListener('DOMContentLoaded', () => {
    updateTotal();

    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => {
            let quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
            updateTotal();
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => {
            let quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updateTotal();
        });
    });

    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            let price = parseFloat(item.getAttribute('data-price'));
            let quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        document.getElementById('total').textContent = total.toFixed(2);
    }
});

