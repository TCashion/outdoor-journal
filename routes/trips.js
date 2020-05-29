const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
// require isLoggedIn module
const isLoggedIn = require('./modules/isloggedin');

// GET trips/index
router.get('/trips', isLoggedIn, tripsCtrl.index);
// GET /trips/new
router.get('/trips/new', isLoggedIn, tripsCtrl.new);
// POST /trips
router.post('/trips', isLoggedIn, tripsCtrl.create);


module.exports = router;