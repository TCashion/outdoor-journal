const Trip = require('../../models/trip');

module.exports = {
  isLoggedIn, 
  isTripCreator,
  isCommentCreator, 
  isLogCreator
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
function isTripCreator(req, res, next) {
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

function isLogCreator(req, res, next) {
  // verifies that the logged-in user also owns the trip
  Trip.findOne({'logs._id': req.params.id}, function(err, trip) {
    if (trip.loggerId.equals(req.user._id)) {
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      redirect(`/trips/${req.params.id}`)
    }
  });
};

// same use case, but for comments
function isCommentCreator(req, res, next) {
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
  
