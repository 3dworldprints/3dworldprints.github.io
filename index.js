const cartIcon = document.querySelector('.cart');
const cartItemsList = document.querySelector('.cart-items-list');
const cartItemsUl = document.querySelector('.cart-items-list ul');
const checkoutBtn = document.querySelector('.checkout');
const productBtns = document.querySelectorAll('.add-to-cart');

let cartItems = [];

function displayCartItems() {
    cartItemsUl.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price}$`;
        cartItemsUl.appendChild(li);
    });

    if (cartItems.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No hay productos en el carrito.';
        cartItemsUl.appendChild(li);
    }
}

function toggleCartItemsList() {
    cartItemsList.classList.toggle('show');
}

function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');

    const item = {
        id,
        name,
        price
    };

    cartItems.push(item);

    displayCartItems();
    updateCartItemsCount();
}

function updateCartItemsCount() {
    const cartItemsCount = document.querySelector('.cart-items');
    cartItemsCount.innerText = cartItems.length;
}

cartIcon.addEventListener('click', toggleCartItemsList);

productBtns.forEach(button => {
    button.addEventListener('click', addToCart);
});

checkoutBtn.addEventListener('click', () => {
    alert('¡Gracias por su compra!');
});

updateCartItemsCount();
displayCartItems();

