const User = require('../models/user');
const Trip = require('../models/trip');
const request = require('request');
// rootURL for animals API
const rootURL = 'https://explorer.natureserve.org/';

module.exports = {
    search, 
};

function search(req, res) {
    const animalQuery = req.query.animal;
    const options = {
        url: `${rootURL}/api/data/search`, 
        body: JSON.stringify({
            "criteriaType" : "combined",
            "textCriteria" : [{
            "paramType" : "quickSearch",
            "searchToken" : `${animalQuery}`
          } ],
            "statusCriteria" : [ ],
            "locationCriteria" : [ ],
            "pagingOptions" : null,
            "recordSubtypeCriteria" : [ ],
            "modifiedSince" : null,
            "recordTypeCriteria" : [ ]
        }), 
        method: 'POST'
    };  
    request(options, function(err, response, body) {
        const animalData = JSON.parse(body);
        console.log('animalData', animalData)
        // res.send(body);
        res.redirect(`/trips/${req.params.id}`);
    });
};

