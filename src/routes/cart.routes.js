const express = require('express');
const router = express.Router();
const { cart } = require('../controllers/cart');

router.get('/', cart);

module.exports = router;