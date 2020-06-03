const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    search, 
};

function search(req, res) {
    res.send('search for animal');
};