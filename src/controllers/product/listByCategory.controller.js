const { loadData } = require("../../data/json");
const converterMoneyArg = require("../../utils/converterMoneyArg");

module.exports = (req, res) => {
  const { category } = req.params; // Obtener la categoría de la URL
  const { page = 1, limit = 8 } = req.query;

  const parsedPage = Math.max(1, parseInt(page)) || 1;
  const parsedLimit = Math.max(1, parseInt(limit)) || 8;

  const products = loadData("products");
  const categories = loadData("categories");

  if (!Array.isArray(products)) {
    return res
      .status(500)
      .render("error/500", { message: "Error al cargar los productos" });
  }

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (product) => product.category_id === category
  );

  if (filteredProducts.length === 0) {
    //return res.status(404).render("error/404", {
    return res.status(404).render("error/404", {
      message: `No se encontraron productos en la categoría "${category}".`,
    });
  }

  // Paginar los productos filtrados
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = startIndex + parsedLimit;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / parsedLimit);

  res.render("product/listByCategory", {
    products: paginatedProducts,
    converterMoneyArg,
    currentPage: parsedPage,
    totalPages,
    limit: parsedLimit,
    categories,
    category,
  });
};
