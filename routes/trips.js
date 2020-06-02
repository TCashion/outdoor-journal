const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
// require isLoggedIn module
const authorizations = require('../config/middleware/authorizations.js');

// GET trips/index
router.get('/trips', authorizations.isLoggedIn, tripsCtrl.index);
// GET /trips/new
router.get('/trips/new', authorizations.isLoggedIn, tripsCtrl.new);
// GET /trips/:id/edit 
router.get('/trips/:id/edit', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.edit);
// GET /trips/:id
router.get('/trips/:id', authorizations.isLoggedIn, tripsCtrl.show);
// POST /trips
router.post('/trips', authorizations.isLoggedIn, tripsCtrl.create);
// DELETE /trips/:id
router.delete('/trips/:id', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.delete);
// PUT /trips/:id
router.put('/trips/:id', authorizations.isLoggedIn, authorizations.isTripCreator, tripsCtrl.update);

module.exports = router;