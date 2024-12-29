document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const btnBuy = document.getElementById('btn-buy');
    const btnClearCart = document.getElementById('clear-cart');

    const cutText = (text = "", long) => text.length > long ? text.substring(0, long) + "..." : text;
    const converterMoneyArg = (num = 0) => num.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

    // Guardar carrito en LocalStorage
    const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar contador de productos en el carrito
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Renderizar carrito
    function renderCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                total += product.price * item.quantity;
                cartList.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-3 col-md-2">
                            <img src="/images/products/${product.image}" class="img-fluid rounded-start" alt="${product.name}">
                        </div>
                        <div class="col-9 col-md-10">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="card-title">${product.name}</h5>
                                    <button class="btn btn-sm btn-outline-danger" onclick="removeProductCart('${product.id}')">
                                        <i class="far fa-times-circle"></i>
                                    </button>
                                </div>
                                <p class="card-text text-muted">${cutText(product.description, 70)}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Precio: ${converterMoneyArg(product.price)}</span>
                                    <div class="d-flex align-items-center gap-2">
                                        <button class="btn btn-sm btn-primary" onclick="updateQuantity('${product.id}', ${item.quantity - 1})">-</button>
                                        <span class="form-control text-center" style="width: 50px;">${item.quantity}</span>
                                        <button class="btn btn-sm btn-primary" onclick="updateQuantity('${product.id}', ${item.quantity + 1})">+</button>
                                    </div>
                                    <span class="text-success">Subtotal: ${converterMoneyArg(product.price * item.quantity)}</span>
                                </div>
                            </div>
                        </div>    
                    </div>            
                </div>`;
            }
        });

        cartTotal.textContent = converterMoneyArg(total);
        updateCartCount(); // Actualizar el contador de productos
    }

    // Añadir producto al carrito
    window.addProductCart = (productId) => {
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex !== -1) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        saveCart();
        toastr.success('Producto añadido al carrito', '¡Éxito!');
        renderCart();
    };

    // Eliminar producto del carrito
    window.removeProductCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        toastr.warning('Producto eliminado del carrito', 'Aviso');
        renderCart();
    };

    // Actualizar cantidad de producto
    window.updateQuantity = (productId, quantity) => {
        cart = cart.map(item => {
            if (item.id === productId) {
                item.quantity = Math.max(1, quantity);
            }
            return item;
        });
        saveCart();
        renderCart();
    };

    // Vaciar carrito
    btnClearCart.addEventListener('click', () => {
        cart = [];
        saveCart();
        toastr.info('Carrito vaciado', 'Información');
        renderCart();
    });

    // Simular compra
    btnBuy.addEventListener('click', () => {
        if (cart.length > 0) {
            toastr.success('Compra realizada con éxito', '¡Gracias!');
            cart = [];
            saveCart();
            renderCart();
        } else {
            toastr.error('El carrito está vacío', 'Error');
        }
    });

    renderCart();
});