const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    commentorName: String, // req.user.name
    commentor: {
        type: {
            type: Schema.Types.ObjectId, // req.user._id for creation 
            ref: 'User',
            required: true
        }, 
    },
    likes: [Schema.Types.ObjectId], // length of array is the number of likes
        // check for user's id in array to determine whether they like or unlike
        // Array.some() with .equals method will return boolean 
}, {
    timestamps: true
});

const logSchema = new mongoose.Schema({
    content: {
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
    comments: [commentSchema], // JIM
    likes: [Schema.Types.ObjectId]
}, {
    timestamps: true
});

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
    logs: [logSchema], // JIM
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
    pictures: [String],
    animals: [String],
    location: {lat: Number, long: Number},
    active: {
        type: Boolean,
        required: true, 
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);