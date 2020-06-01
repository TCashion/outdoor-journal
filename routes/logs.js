const express = require('express');
const router = express.Router();
const logsCtrl = require('../controllers/logs');
// require isLoggedIn module
const isLoggedIn = require('./modules/isloggedin');

// POST /trips/:id/logs/likes
router.post('/trips/:tripId/logs/:logId/likes', isLoggedIn, logsCtrl.updateLikes);
// POST /trips/:id/logs
router.post('/trips/:id/logs', isLoggedIn, logsCtrl.create);

module.exports = router; 