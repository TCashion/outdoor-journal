const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    new: newTrip
}

function newTrip(req, res) {
    res.send('new trip controller')
}

