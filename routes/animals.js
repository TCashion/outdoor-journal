const express = require('express');
const router = express.Router();
const animalsCtrl = require('../controllers/animals');
// require isLoggedIn module
const authorizations = require('../config/middleware/authorizations.js');

// DELETE /animals/:id
router.delete('/animals/:id', authorizations.isLoggedIn, authorizations.isAnimalCreator, animalsCtrl.delete);
// POST /trips/:id/animals
router.post('/trips/:id/animals', authorizations.isLoggedIn, authorizations.isTripCreator, animalsCtrl.create);
// GET /trips/:id/animal
router.get('/trips/:id/animals', authorizations.isLoggedIn, authorizations.isTripCreator, animalsCtrl.search);

module.exports = router; 