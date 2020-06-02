const express = require('express');
const router = express.Router();
const logsCtrl = require('../controllers/logs');
// require isLoggedIn module
const authorizations = require('../config/middleware/authorizations.js');

// PUT /trips/:id/logs/likes
router.put('/trips/:tripId/logs/:logId/likes', authorizations.isLoggedIn, logsCtrl.updateLikes);
// POST /trips/:id/logs
router.post('/trips/:id/logs', authorizations.isLoggedIn, authorizations.isTripCreator, logsCtrl.create);
// DELETE /logs/:id
router.delete('/logs/:id', authorizations.isLoggedIn, authorizations.isLogCreator, logsCtrl.delete);

module.exports = router; 