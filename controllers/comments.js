const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    create, 
    updateLikes, 
    delete: deleteOne
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

function updateLikes(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        trip.comments.forEach(function(comment) {
            if (comment.id === req.params.commentId) {
                let idx = comment.likes.indexOf(req.user._id);
                if (idx === -1) {
                    comment.likes.push(req.user._id)
                } else {
                    comment.likes.splice(idx, 1);
                };
            };
        });
        trip.save(); 
        res.redirect(`/trips/${req.params.tripId}`);
    });
}

function deleteOne(req,res) {
    const commentSubDoc = req.trip.comments.id(req.params.id);
    commentSubDoc.remove();
    req.trip.save(function(err){
        res.redirect(`/trips/${req.trip._id}`);
    });
};