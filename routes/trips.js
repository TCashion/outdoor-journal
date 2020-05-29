const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
// require isLoggedIn module
const isLoggedIn = require('./modules/isloggedin');

// GET /trips/new
router.get('/trips/new', isLoggedIn, tripsCtrl.new);



module.exports = router;