const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    create
};

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        req.body.commentorName = req.user.name,
        User.findById(req.user._id, function(err, user) {
            req.body.commentorId = user;
            trip.comments.push(req.body);
            trip.save(); 
            res.redirect(`/trips/${req.params.id}`);
        })
    });
};