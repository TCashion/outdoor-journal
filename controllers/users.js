const User = require('../models/user');

module.exports = {
    index
};

function index(req, res) {
    res.render('users/index', {
        title: "Outdoor Journal - Users", 
        page: 'userIndex',
        user: req.user
    })
};