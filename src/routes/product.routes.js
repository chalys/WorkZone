const express = require("express");
const router = express.Router();
const { detailProduct, listProduct } = require("../controllers/product");

router.get("/detalle/:id", detailProduct);
router.get("/lista", listProduct);

module.exports = router;