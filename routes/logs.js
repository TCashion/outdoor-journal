const express = require('express');
const router = express.Router();
const logsCtrl = require('../controllers/logs');
const authorizations = require('../config/middleware/authorizations.js');

router.put('/trips/:tripId/logs/:logId/likes', authorizations.isLoggedIn, logsCtrl.updateLikes);
router.post('/trips/:id/logs', authorizations.isLoggedIn, authorizations.hasTripAccess, logsCtrl.create);
router.delete('/logs/:id', authorizations.isLoggedIn, authorizations.isLogCreator, logsCtrl.delete);

module.exports = router; 