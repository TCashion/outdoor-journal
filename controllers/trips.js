const User = require('../models/user');
const Trip = require('../models/trip');

module.exports = {
    index,
    new: newTrip,
    create
}

function index(req, res) {
    res.render('trips/index', {
        title: 'Your Trips', 
        user: req.user
    })
};

function newTrip(req, res) {
    res.render('trips/new', {
        title: 'New Trip', 
        user: req.user,
        classifications: ['Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking','Other']
    })
}

function create(req, res) {
    console.log(req.body)
    res.redirect('/trips');
}

