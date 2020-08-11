const User = require('../models/user');
const Trip = require('../models/trip');
const timeOptionsOne = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptionsTwo = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: 'true'};
const classifications = ['Rafting', 'Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking','Other', 'Boating', 'Skiing', 'Snowboarding'].sort(); 
const helpers = require('../config/middleware/helpers');

module.exports = {
    index,
    new: newTrip,
    create, 
    show, 
    delete: deleteOne, 
    update, 
    edit, 
    updateDate,
    indexForAPI
};

function index(req, res) {
    Trip.find({user : req.user._id}, function(err, trips) {
        trips.sort(helpers.sortByDateAscending);
        trips.sort(helpers.sortByActive);
        res.render('trips/index', {
            title: 'Your Trips', 
            trips,
            timeOptionsOne
        });
    });
};

async function newTrip(req, res) {
    console.log(req.user)
    let allUsers = await User.find({});
    allUsers = allUsers.map((user) => {
        return {
            name: user.name,
            id: user._id
        }
    })
    res.render('trips/new', {
        title: 'New Trip', 
        classifications,
        allUsers
    });
};

function create(req, res) {
    const trip = new Trip(req.body);
    if (!trip.startDate) trip.startDate = new Date();
    trip.user = req.user._id
    trip.location = helpers.parseCoordinates(req.body.location);
    trip.save(function(err) {
        if (err) res.send('invalid data');
        res.redirect(`/trips/${trip.id}`);
    });
};

function show(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('trips/show', {
            trip, 
            title: `${trip.title}`,
            timeOptionsOne,
            timeOptionsTwo, 
            mapsApi: process.env.GOOGLE_MAPS, 
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
    req.trip.updateOne(
        {
            $set: {
                title: req.trip.title,
                description: req.trip.description,
                startDate: req.trip.startDate,
                endDate: req.trip.endDate,
                active: req.trip.active, 
                classification: req.trip.classification,
                location: helpers.parseCoordinates(req.body.location)
            }
        }, function(err) {
            res.redirect(`/trips/${req.params.id}`);
        })
};

function updateDate(req, res) {
    if (req.body.endDate) req.body.active = false;
    if (!req.body.endDate) req.body.active = true;  
    Object.assign(req.trip, req.body);
    req.trip.save(function(err) {
        res.redirect(`/trips/${req.params.id}`);
    });
}

function edit(req, res) {
    res.render('trips/edit', {
        trip: req.trip, 
        title: 'Edit Trip',
        classifications,
        timeOptionsOne,
        timeOptionsTwo
    }); 
}

async function indexForAPI(req, res) {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err)
    }
}