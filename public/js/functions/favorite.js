document.addEventListener("DOMContentLoaded", () => {
    updateFavoriteIcons();
  
    // Agregar evento de clic a todos los iconos de favoritos
    document.querySelectorAll(".product-card__favorite-icon").forEach(icon => {
      icon.addEventListener("click", function () {
        const productId = parseInt(this.dataset.productId);
        toggleFavorite(productId);
      });
    });
  });
  
  function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    if (favorites.includes(productId)) {
      favorites = favorites.filter(id => id !== productId); // Eliminar de favoritos
    } else {
      favorites.push(productId); // Agregar a favoritos
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoriteIcons();
  }
  
  function updateFavoriteIcons() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    document.querySelectorAll(".product-card__favorite-icon").forEach(icon => {
      let productId = parseInt(icon.dataset.productId);
      if (favorites.includes(productId)) {
        icon.classList.add("fa-solid", "text-danger");
        icon.classList.remove("fa-regular");
      } else {
        icon.classList.add("fa-regular");
        icon.classList.remove("fa-solid", "text-danger");
      }
    });
  }