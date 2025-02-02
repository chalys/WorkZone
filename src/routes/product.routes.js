const express = require("express");
const router = express.Router();
const { detailProduct, listProduct, listProductByCategory } = require("../controllers/product");

router.get("/detalle/:id", detailProduct);
router.get("/lista", listProduct);
router.get("/categoria/:category", listProductByCategory);
module.exports = router;