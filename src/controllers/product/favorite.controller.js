const { loadData } = require("../../data/json");
const converterMoneyArg = require("../../utils/converterMoneyArg");

module.exports = (req, res) => {
  const products = loadData("products");

  // No intentes acceder a localStorage aquí
  res.render("product/favorite", {
    products, // Enviar todos los productos y filtrarlos en el cliente
    converterMoneyArg,
  });
};