const converterMoneyArg = require("../../utils/converterMoneyArg");
const timeSince = require("../../utils/timeSince");
const products = require("../../data/json/products.json");
const reviews = require("../../data/json/reviews.json");
const users = require("../../data/json/users.json")

module.exports = (req, res) => {
  const selectedUserFields = users.map(user=>({
    id:user.id,
    userName: user.userName,
    profileImage: user.profileImage,
    socialMedia: user.socialMedia
  }))
  
  res.render("./other/home", {
    products, reviews, users:selectedUserFields,
    converterMoneyArg, timeSince
  });
};
