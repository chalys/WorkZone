// Inicializar carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Guardar carrito en LocalStorage
const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));

// Añadir producto al carrito
function addProductCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart();
    alert("Producto añadido al carrito");
}

// Eliminar producto del carrito
function removeProductCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    alert("Producto eliminado del carrito");
}

// Cambiar cantidad de producto
function updateQuantity(productId, quantity) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity = Math.max(1, quantity);
        saveCart();
    }
}

// Calcular total de productos
function calculateTotal(products) {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product.price * item.quantity);
    }, 0);
}