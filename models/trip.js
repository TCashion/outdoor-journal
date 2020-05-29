const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    commentor: {
        type: [Object], // JIM 
        commentor: true
    },
    likes: {
        type: [Number], 
        default: 0
    }
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
        required: true
    }
}, {
    timestamps: true
});

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        default: 'Hiking'
    },
    description: {
        type: String,
        required: true, 
        default: 'My hiking trip...'
    },
    logs: [logSchema], // JIM
    startDate: {
        type: Date,
        default: new Date(),
        required: true
    },
    endDate: Date,
    classification: {
        type: String,
        enum: ['Hiking', 'Biking', 'Fishing', 'Hunting', 'Climbing', 'Trekking', 'Ice-Climbing', 'Running', 'Backpacking', 'Camping', 'Trail Running', 'Mountain Biking'],
    },
    pictures: [String],
    comments: [commentSchema], // JIM
    animals: [String],
    locations: [Number],
    active: {
        type: Boolean,
        required: true, 
        default: true
    },
}, {
    timestamps: true
});

modole.exports = mongoose.Schema('Trip', tripSchema);