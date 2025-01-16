// Variables de paginación
let currentPage = 1;
let pageSize = 8; // Número de productos por página

// Función para cambiar el tamaño de la página
function changePageSize(size) {
  pageSize = parseInt(size, 10);
  currentPage = 1; // Resetea a la primera página cuando se cambia el tamaño
  renderProducts();
}

// Función para mostrar los productos en la página actual
function renderProducts() {
  // Dividir los productos en páginas
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentProducts = products.slice(start, end);

  // Mostrar los productos
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Limpiar la lista antes de renderizar

  currentProducts.forEach((product) => {
    const productCard = `
                    <div class="col">
                        <article class="card product-card h-100">
                            <div class="position-relative">
                                <img class="card-img-top" src="/images/products/${product.image}" alt="${product.name}">
                                <i class="fa-regular fa-heart  product-card__favorite-icon position-absolute top-0 end-0 p-2 text-danger"></i>
                            </div>
                            <div class="card-body">
                                <p class="card-text small text-muted mb-0">${product.category}</p>
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text fw-bold text--green">${converterMoneyArg(product.price)}</p>
                            </div>
                            <div class="card-footer bg-white d-flex justify-content-between gap-2 border-0">
                                <a href="/productos/detalle/${product.id}" class="btn btn--secondary w-100">VER MÁS</a>
                                <button class="btn btn--primary" type="button" onclick="addProductCart('${product.id}')">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </article>
                    </div>
                `;
    productList.innerHTML += productCard;
  });

  renderPagination();
}

// Función para renderizar los botones de paginación
function renderPagination() {
  const totalPages = Math.ceil(products.length / pageSize);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = ""; // Limpiar la paginación

  // Botón para la página anterior
  if (currentPage > 1) {
    pagination.innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Anterior</a></li>`;
  }

  // Botones de páginas
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<li class="page-item ${i === currentPage ? "active" : ""}"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
  }

  // Botón para la siguiente página
  if (currentPage < totalPages) {
    pagination.innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Siguiente</a></li>`;
  }
}

// Función para cambiar de página
function changePage(page) {
  currentPage = page;
  renderProducts();
}

// Inicializar
renderProducts();
