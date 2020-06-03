const express = require('express');
const router = express.Router();
const animalsCtrl = require('../controllers/animals');
// require isLoggedIn module
const authorizations = require('../config/middleware/authorizations.js');

// GET /trips/:id/animal
router.get('/trips/:id/animal', authorizations.isLoggedIn, authorizations.isTripCreator, animalsCtrl.search);

module.exports = router; 