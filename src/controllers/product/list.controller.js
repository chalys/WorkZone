const products = require("../../data/json/products.json"); // Importa los datos del archivo JSON
module.exports = (req, res) => {
    res.render("product/list",{ products: JSON.stringify(products) });
}