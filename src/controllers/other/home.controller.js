const { loadData } = require("../../data/json");
const converterMoneyArg = require("../../utils/converterMoneyArg");
const timeSince = require("../../utils/timeSince");

module.exports = (req, res) => {

  const products = loadData("products");
  const reviews = loadData("reviews");
  const users = loadData("users")
  const categories = loadData("categories");

  const selectedProductFields = products.map(product=>({
    id:product.id,
    name: product.name,
    category_id: product.category_id,
    price:product.price,
    image:product.image
  }))

  const selectedUserFields = users.map(user=>({
    id:user.id,
    userName: user.userName,
    profileImage: user.profileImage,
    socialMedia: user.socialMedia
  }))
  
  res.render("./other/home", {
    products:selectedProductFields, reviews, users:selectedUserFields, categories,
    converterMoneyArg, timeSince
  });
};
