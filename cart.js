const cartItems = document.getElementById('cart-items');

function showCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartItems.appendChild(tr);
    });
}

showCartItems();
