document.addEventListener('DOMContentLoaded', () => {
    const cartCountMobile = document.getElementById('cart-count-mobile');
    const cartCountDesktop = document.getElementById('cart-count-desktop');
    
    // Obtener el contador de productos desde localStorage
    const cartCount = localStorage.getItem('cartCount') || 0;
    
    // Actualizar el contador en ambas vistas
    if (cartCountMobile) {
      cartCountMobile.textContent = cartCount;
    }
    if (cartCountDesktop) {
      cartCountDesktop.textContent = cartCount;
    }
  });