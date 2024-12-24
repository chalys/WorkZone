const products = require("../../data/json/products.json")
module.exports = (req,res)=>{
    res.render("./other/home",{
        products
    })

}