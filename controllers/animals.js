const User = require('../models/user');
const Trip = require('../models/trip');
const request = require('request');
// rootURL for animals API
const rootURL = 'https://explorer.natureserve.org/';

module.exports = {
    search, 
    create
};

function search(req, res) {
    if (!req.query.animal) res.redirect(`/trips/${req.trip._id}`);
    const animalQuery = req.query.animal;
    const options = {
        url: `${rootURL}api/data/search`, 
        body: JSON.stringify({
            'criteriaType' : 'combined',
            'textCriteria' : [{
                'paramType' : 'quickSearch',
                'searchToken' : `${animalQuery}`
            }],
            'statusCriteria' : [ ],
            'locationCriteria' : [ ],
            'pagingOptions' : null,
            'recordSubtypeCriteria' : [ ],
            'modifiedSince' : null,
            'recordTypeCriteria' : [ ]
        }), 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }
    };  
    request(options, function(err, response, body) {
        const animalData = JSON.parse(body);
        res.render(`trips/animals/index`, {
            title: 'Search results', 
            animalData, 
            trip: req.trip
        });
    });
};


function create(req, res) {
    console.log(req.query) 
    // let animal; 
    // animal.commonName = req.query.commonName;
    // animal.scientificName = req.query.scientificName;
    // animal.nsxUrl = req.query.nsxUrl;
    req.trip.animals.push(req.query);
    req.trip.save(); 
    res.redirect(`/trips/${req.params.id}`);
};