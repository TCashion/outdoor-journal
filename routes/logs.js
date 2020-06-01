const express = require('express');
const router = express.Router();
const logsCtrl = require('../controllers/logs');
// require isLoggedIn module
const authorizations = require('./modules/authorizations');

// POST /trips/:id/logs/likes
router.post('/trips/:tripId/logs/:logId/likes', authorizations.isLoggedIn, logsCtrl.updateLikes);
// POST /trips/:id/logs
router.post('/trips/:id/logs', authorizations.isLoggedIn, authorizations.isAuthorizedUser, logsCtrl.create);
// DELETE /logs/:id
router.delete('/logs/:id', authorizations.isLoggedIn
, authorizations.isLoggedIn, logsCtrl.delete);

module.exports = router; 