const { loadData } = require("../../data/json");
const converterMoneyArg = require("../../utils/converterMoneyArg");

module.exports = (req, res) => {
  const { keywords, page = 1, limit = 8 } = req.query;

  // Validar que page y limit sean números enteros positivos
  const parsedPage = Math.max(1, parseInt(page)) || 1; // Asegurar que sea al menos 1
  const parsedLimit = Math.max(1, parseInt(limit)) || 8; // Asegurar que sea al menos 1

  const products = loadData("products");
  const categories = loadData("categories");

   // Validar que products sea un array
   if (!Array.isArray(products)) {
    return res.status(500).send("Error al cargar los productos");
  }
  
  // Filtrar productos según las palabras clave
  const productsFilter = products.filter(
    (p) =>
      p.name.toLowerCase().includes(keywords.toLowerCase()) ||
      p.description.toLowerCase().includes(keywords.toLowerCase())
  );

  // Calcular el índice de inicio y fin para la paginación
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = parsedPage * parsedLimit;

  // Obtener los productos para la página actual
  const paginatedProducts = productsFilter.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(productsFilter.length / parsedLimit);

  res.render("other/search", {
    products: paginatedProducts,
    keywords,
    converterMoneyArg,
    currentPage: parsedPage,
    totalPages, 
    limit: parsedLimit,
    categories
  });
};