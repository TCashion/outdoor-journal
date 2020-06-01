const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    create,
    updateLikes
};

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.logs.push(req.body);
        trip.save(function(err) {
            res.redirect(`/trips/${req.params.id}`);
        });
    });
};

function updateLikes(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        trip.logs.forEach(function(log) {
            if (log.id === req.params.logId) {
                let idx = log.likes.indexOf(req.user._id);
                if (idx === -1) {
                    log.likes.push(req.user._id)
                } else {
                    log.likes.splice(idx, 1);
                }
            };
        });
        trip.save(); 
        res.redirect(`/trips/${req.params.tripId}`);
    });
};