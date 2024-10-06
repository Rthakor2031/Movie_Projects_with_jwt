const mongoose = require('mongoose');

// Define the movie schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
});

// Create the movie model
const MovieModel = mongoose.model('Movie', movieSchema);

// Export the model
module.exports = MovieModel;
