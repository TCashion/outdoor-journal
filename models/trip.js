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
    likes: [Schema.Types.ObjectId], 
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
        default: 'Hiking'
    },
    description: {
        type: String,
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