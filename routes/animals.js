const express = require('express');
const router = express.Router();
const animalsCtrl = require('../controllers/animals');
const authorizations = require('../config/middleware/authorizations.js');

router.delete('/animals/:id', authorizations.isLoggedIn, authorizations.isAnimalCreator, animalsCtrl.delete);
router.post('/trips/:id/animals', authorizations.isLoggedIn, authorizations.hasTripAccess, animalsCtrl.create);
router.get('/trips/:id/animals', authorizations.isLoggedIn, authorizations.hasTripAccess, animalsCtrl.search);

module.exports = router; 