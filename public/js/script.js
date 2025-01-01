/** Script  para agregar o remover la clase Show del Menu*/

// Obtener el botón y el contenedor del colapso
const toggleButton = document.getElementById("toggleButton");
const collapseElement = document.getElementById("mobileMenu");

function checkScreenSize() {
  const width = window.innerWidth;
  // Si es móvil o tableta
  if (width <= 1024) {
    // Asegurarse de que el colapso está cerrado en dispositivos móviles
    if (collapseElement.classList.contains("show")) {
      collapseElement.classList.remove("show");
    }
  } else {
    // Si es desktop
    // Asegurarse de que el colapso está abierto en dispositivos grandes
    if (!collapseElement.classList.contains("show")) {
      collapseElement.classList.add("show");
    }
  }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

/** */

