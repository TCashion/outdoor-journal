const User = require('../models/user');
const Trip = require('../models/trip');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

module.exports = {
    index,
    new: newTrip,
    create, 
    show
}

function index(req, res) {
    Trip.find({loggerId : req.user._id}, function(err, trips) {
        res.render('trips/index', {
            title: 'Your Trips', 
            user: req.user, 
            trips,
            options
        });
    });
};

function newTrip(req, res) {
    res.render('trips/new', {
        title: 'New Trip', 
        user: req.user,
        classifications: ['Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking','Other']
    });
};

function create(req, res) {
    const trip = new Trip(req.body);
    if (!trip.startDate) trip.startDate = new Date();
    trip.loggerId = req.user._id
    trip.location = parseCoordinates(req.body.location);
    trip.save(function(err) {
        if (err) res.send('invalid data');
        res.redirect('/trips');
    });
};

function show(req, res) {
    Trip.findById((req.params.id), function(err, trip) {
        res.render('trips/show', {
            trip, 
            user: req.user,
            title: `${trip.title}`,
            options
        });
    });  
};

function parseCoordinates(location) {
    const coordinates = location.split(',').map(coord => parseFloat(coord));
    return {
        lat: coordinates[0],
        long: coordinates[1]
    };
};