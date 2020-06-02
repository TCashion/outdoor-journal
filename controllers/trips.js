const User = require('../models/user');
const Trip = require('../models/trip');
const timeOptionsOne = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptionsTwo = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: 'true'};
const classifications = ['Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking','Other'].sort(); 

module.exports = {
    index,
    new: newTrip,
    create, 
    show, 
    delete: deleteOne, 
    update, 
    edit
};

function index(req, res) {
    Trip.find({loggerId : req.user._id}, function(err, trips) {
        res.render('trips/index', {
            title: 'Your Trips', 
            trips,
            timeOptionsOne
        });
    });
};

function newTrip(req, res) {
    res.render('trips/new', {
        title: 'New Trip', 
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

function parseCoordinates(location) {
    const coordinates = location.split(',').map(coord => parseFloat(coord));
    return {
        lat: coordinates[0],
        long: coordinates[1]
    };
};

function show(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('trips/show', {
            trip, 
            title: `${trip.title}`,
            timeOptionsOne,
            timeOptionsTwo
        });
    });  
};

function deleteOne(req, res) {
    req.trip.remove(function(err) {
        res.redirect('/trips')
    });
};

function update(req, res) {
    if (req.body.endDate) req.body.active = false;
    if (!req.body.endDate) req.body.active = true;
    Object.assign(req.trip, req.body);
    req.trip.save(function(err) {
        res.redirect(`/trips/${req.params.id}`);
    });
};

function edit(req, res) {
    res.render('trips/edit', {
        trip: req.trip, 
        title: `${req.trip.title}`,
        classifications,
        timeOptionsOne,
        timeOptionsTwo
    }); 
}