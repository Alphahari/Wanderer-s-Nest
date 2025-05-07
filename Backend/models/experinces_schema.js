const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    bestTime: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true
    },
    
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        required: true
    }
});

const experience = new mongoose.model("Experience", experienceSchema);

module.exports = experience;