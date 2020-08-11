const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    commentorName: String, 
    user: {
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

const featureSchema = new mongoose.Schema({
    type: {
        type: String, 
        default: 'Feature'
    },
    geometry: {
        type: {
            type: String, 
            default: 'Point',
        },
        coordinates: [[{
            type: Number,
            default: 0
        }]]
    }, 
    properties: Object
}, {
    timestamps: true
})

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

const animalSchema = new mongoose.Schema({
    commonName: String,
    scientificName: String, 
    nsxUrl: String
}, {
    timestamps: true
})

const tripSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
    animals: [animalSchema],
    featureCollection: {
        type: {
            type: String, 
            default: 'FeatureCollection'
        },
        features: [featureSchema]
    },
    collaborators: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    active: {
        type: Boolean,
        required: true, 
        default: true
    },
    collaborators: [
        {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);