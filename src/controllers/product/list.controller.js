const { loadData } = require("../../data/json");
const converterMoneyArg = require("../../utils/converterMoneyArg");

module.exports = (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  // Asegurarse de que page y limit sean números válidos
  const parsedPage = Math.max(1, parseInt(page)) || 1;
  const parsedLimit = Math.max(1, parseInt(limit)) || 8;

  const products = loadData("products");
  const categories = loadData("categories");

  // Validar que products sea un array
  if (!Array.isArray(products)) {
    return res.status(500).send("Error al cargar los productos");
  }

  // Calcular índices para la paginación
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = startIndex + parsedLimit;

  // Obtener los productos paginados
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Calcular el total de páginas
  const totalPages = Math.ceil(products.length / parsedLimit);

  res.render("product/list", {
    products: paginatedProducts,
    converterMoneyArg,
    currentPage: parsedPage,
    totalPages,
    limit: parsedLimit,
    categories
  });
};