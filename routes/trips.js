const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
// require isLoggedIn module
const authorizations = require('./modules/authorizations');

// GET trips/index
router.get('/trips', authorizations.isLoggedIn, tripsCtrl.index);
// GET /trips/new
router.get('/trips/new', authorizations.isLoggedIn, tripsCtrl.new);
// GET /trips/:id
router.get('/trips/:id', authorizations.isLoggedIn, tripsCtrl.show);
// POST /trips
router.post('/trips', authorizations.isLoggedIn, tripsCtrl.create);

module.exports = router;