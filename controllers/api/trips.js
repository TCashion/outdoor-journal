const Trip = require('../../models/trip');

module.exports = {
    index
};

async function index(req, res) {
    try { 
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
}