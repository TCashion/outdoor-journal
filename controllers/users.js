const User = require('../models/user');
const Trip = require('../models/trip');
const helpers = require('../config/middleware/helpers')

module.exports = {
    index
};

function index(req, res) {
    Trip.find({})
        .populate('user')
        .exec(function(err, trips) {
            trips.sort(helpers.sortByDateDescending);
            res.render('users/index', {
                title: 'Users', 
                page: 'userIndex',
                trips
            });
        });
};