const express = require("express");
const router = express.Router();
const { detailProduct } = require("../controllers/product");

router.get("/detalle/:id", detailProduct);

module.exports = router;