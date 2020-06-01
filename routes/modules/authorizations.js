const Trip = require('../../models/trip');

module.exports = {
  isLoggedIn, 
  isAuthorizedUser,
  isAuthorizedCommentor
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

// for use in creating logs or deleting trip content
// ensures the user is the trip owner
function isAuthorizedUser(req, res, next) {
  // verifies that the logged-in user also owns the trip
  Trip.findById(req.params.id, function(err, trip) {
    if (trip.loggerId.equals(req.user._id)) {
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      redirect(`/trips/${req.params.id}`)
    }
  });
};

// same use case, but for comments
function isAuthorizedCommentor(req, res, next) {
  Trip.findOne({'comments._id': req.params.id}, function(err, trip) {
    const commentSubDoc = trip.comments.id(req.params.id);
    if (commentSubDoc.commentorId.equals(req.user._id)) {
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      redirect(`/trips/${req.params.id}`)
    }
  });
}
  
