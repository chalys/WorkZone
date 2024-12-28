const products = require("../../data/json/products.json")
module.exports = (req, res) =>{
    //res.render("cart",{products})
    res.render("cart", { products: JSON.stringify(products) });
}