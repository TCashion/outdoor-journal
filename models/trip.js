const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    commentorName: String, 
    commentorId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    date: {
        type: Date, 
        default: function() {
            return new Date();
        },
        required: true
    },
    likes: [Schema.Types.ObjectId], // length of array is the number of likes
        // check for user's id in array to determine whether they like or unlike
        // Array.some() with .equals method will return boolean 
}, {
    timestamps: true
});

const logSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: function() {
            return new Date();
        },
        required: true
    },
    // comments: [commentSchema], // moved this back to trip schema 
    likes: [Schema.Types.ObjectId]
}, {
    timestamps: true
});

const animalSchema = new mongoose.Schema({
    commonName: String,
    scientificName: String
}, {
    timestamps: true
})

const tripSchema = new mongoose.Schema({
    loggerId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        // required: true, 
        default: 'Hiking'
    },
    description: {
        type: String,
        // required: true, 
        default: 'My hiking trip...'
    },
    logs: [logSchema],
    startDate: {
        type: Date,
        default: function() {
            return new Date();
        },
    },
    endDate: Date,
    classification: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    pictures: [String],
    animals: [String],
    location: {
        lat: {
            type: Number, 
        },
        long: {
            type: Number
        }
    },
    active: {
        type: Boolean,
        required: true, 
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);