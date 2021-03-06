const Trip = require('../../models/trip');

module.exports = {
  isLoggedIn, 
  isCommentCreator, 
  isLogCreator, 
  isAnimalCreator,
  hasTripAccess
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

function isLogCreator(req, res, next) {
  Trip.findOne({'logs._id': req.params.id}, function(err, trip) {
    if (trip.user.equals(req.user._id)) {
      console.log('Authorized user.')
      req.trip = trip; 
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      res.redirect(`/trips/${req.params.id}`)
    }
  });
};

function isCommentCreator(req, res, next) {
  Trip.findOne({'comments._id': req.params.id}, function(err, trip) {
    const commentSubDoc = trip.comments.id(req.params.id);
    if (commentSubDoc.commentorId.equals(req.user._id)) {
      console.log('Authorized user.')
      req.trip = trip; 
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      res.redirect(`/trips/${req.params.id}`)
    }
  });
}
  
function isAnimalCreator(req, res, next) {
  Trip.findOne({'animals._id': req.params.id}, function(err, trip) {
    if (trip.user.equals(req.user._id)) {
      console.log('Authorized user.')
      req.trip = trip; 
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      res.redirect(`/trips/${req.params.id}`)
    }
  });
};

function hasTripAccess(req, res, next) {
  Trip.findById(req.params.id, function(err, trip) {
    if (trip.user.equals(req.user._id)
    || trip.collaborators.includes(req.user._id)) {
      console.log('Authorized user.')
      req.trip = trip; 
      next(); 
    } else {
      console.log('ALERT: insufficient access for this operation')
      res.redirect('/trips/')
    }
  });
}