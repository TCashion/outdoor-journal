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
    const trip = new Trip(req.body);
    if (!trip.startDate) trip.startDate = new Date();
    trip.loggerId = req.user._id
    trip.location = parseCoordinates(req.body.location);
    console.log(trip)
    trip.save(function(err) {
        if (err) res.send('invalid data');
        res.redirect('/trips');
    })
}

function parseCoordinates(location) {
    const coordinates = location.split(',').map(coord => parseFloat(coord));
    return {
        lat: coordinates[0],
        long: coordinates[1]
    };
};