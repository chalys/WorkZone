const express = require('express');
const router = express.Router();
const { home } = require('../controllers/other');

router.get('/', home)
router.get('/home', home)

module.exports = router;