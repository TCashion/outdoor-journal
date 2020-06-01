const User = require('../models/user');
const Trip = require('../models/trip');
const timeOptionsOne = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptionsTwo = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
const classifications = ['Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking','Other'].sort(); 

module.exports = {
    index,
    new: newTrip,
    create, 
    show, 
    delete: deleteOne, 
    update
};

function index(req, res) {
    Trip.find({loggerId : req.user._id}, function(err, trips) {
        res.render('trips/index', {
            title: 'Your Trips', 
            page: 'tripIndex',
            user: req.user, 
            trips,
            timeOptionsOne
        });
    });
};

function newTrip(req, res) {
    res.render('trips/new', {
        title: 'New Trip', 
        page: 'newTrip',
        user: req.user,
        classifications
    });
};

function create(req, res) {
    const trip = new Trip(req.body);
    if (!trip.startDate) trip.startDate = new Date();
    trip.loggerId = req.user._id
    trip.location = parseCoordinates(req.body.location);
    trip.save(function(err) {
        if (err) res.send('invalid data');
        res.redirect(`/trips/${trip.id}`);
    });
};

function show(req, res) {
    Trip.findById((req.params.id), function(err, trip) {
        res.render('trips/show', {
            trip, 
            user: req.user,
            title: `${trip.title}`,
            page: '',
            timeOptionsOne,
            timeOptionsTwo
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

function deleteOne(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.remove();
        res.redirect('/trips');
    });
};

function update(req, res) {
    console.log(req.body)
    res.send(`update trip ${req.params.id}`)
}