const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // enter schema properties
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);