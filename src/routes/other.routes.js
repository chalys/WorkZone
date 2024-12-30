const express = require('express');
const router = express.Router();
const { home, search } = require('../controllers/other');

router.get('/', home)
router.get('/home', home)
router.get('/buscar', search)

module.exports = router;