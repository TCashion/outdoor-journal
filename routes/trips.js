const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const authorizations = require('../config/middleware/authorizations.js');

router.get('/trips', authorizations.isLoggedIn, tripsCtrl.index);
router.get('/trips/new', authorizations.isLoggedIn, tripsCtrl.new);
router.get('/trips/:id/edit', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.edit);
router.get('/trips/:id', authorizations.isLoggedIn, tripsCtrl.show);
router.post('/trips', authorizations.isLoggedIn, tripsCtrl.create);
router.delete('/trips/:id', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.delete);
router.put('/trips/:id/date', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.updateDate);
router.put('/trips/:id', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.update);

module.exports = router;