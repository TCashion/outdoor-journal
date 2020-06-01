const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    create
};

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.logs.push(req.body);
        trip.save(function(err) {
            res.redirect(`/trips/${req.params.id}`);
        });
    });
};