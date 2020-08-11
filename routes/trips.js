const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const authorizations = require('../config/middleware/authorizations.js');

router.get('/trips', authorizations.isLoggedIn, tripsCtrl.index);
router.get('/trips/new', authorizations.isLoggedIn, tripsCtrl.new);
router.get('/trips/:id/edit', authorizations.isLoggedIn, authorizations.hasTripAccess, tripsCtrl.edit);
router.get('/trips/:id', authorizations.isLoggedIn, authorizations.hasTripAccess, tripsCtrl.show);
router.post('/trips', authorizations.isLoggedIn, tripsCtrl.create);
router.delete('/trips/:id', authorizations.isLoggedIn, authorizations.hasTripAccess, tripsCtrl.delete);
router.put('/trips/:id/date', authorizations.isLoggedIn, authorizations.hasTripAccess, tripsCtrl.updateDate);
router.put('/trips/:id', authorizations.isLoggedIn, authorizations.hasTripAccess, tripsCtrl.update);

module.exports = router;