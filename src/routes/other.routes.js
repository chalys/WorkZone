const express = require('express');
const router = express.Router();
const { home, search, about } = require('../controllers/other');

router.get('/', home)
router.get('/home', home)
router.get('/buscar', search)
router.get('/sobre-nosotros', about)

module.exports = router;