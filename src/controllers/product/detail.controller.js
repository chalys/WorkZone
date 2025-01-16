const converterMoneyArg = require('../../utils/converterMoneyArg');
const products = require("../../data/json/products.json");

module.exports = (req, res) => {
  const { id } = req.params; // Captura el parámetro dinámico ":id"

  // Usar una promesa para simular una operación asincrónica
  new Promise((resolve, reject) => {
    // Buscar el producto con el ID correspondiente
    const product = products.find(product => product.id === id);

    // Validar si el producto existe
    if (product) {
      resolve(product); // Resuelve con el producto encontrado
    } else {
      reject(new Error(`Producto con ID ${id} no encontrado`)); // Rechaza con un error si no existe
    }
  })
    .then(product => {
      // Renderizar la vista con los datos del producto
      console.log("Producto encontrado:", product);
      console.log("Precio convertido:", converterMoneyArg(product.price));
      
      res.render("product/detail", { product, converterMoneyArg });
    })
    .catch(error => {
      // Manejar errores (producto no encontrado o cualquier otro error)
      console.error(error.message);

      // Renderizar una página de error personalizada
      res.status(404).render("other/error", {
        message: "Producto no encontrado",
        error: error.message,
      });
    });
};