const express = require('express');
const router = express.Router();
const { home, search, about, contact } = require('../controllers/other');

router.get('/', home)
router.get('/home', home)
router.get('/buscar', search)
router.get('/sobre-workzone', about)
router.get('/contacto', contact)

module.exports = router;