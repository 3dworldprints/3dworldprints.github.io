const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let item = cart.find(item => item.id === id);
    if (!item) {
        item = {
            id,
            name,
            price,
            quantity: 1
        };
        cart.push(item);
    } else {
        item.quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let count = 0;
    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.innerText = count;
}
