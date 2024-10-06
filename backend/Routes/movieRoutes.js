const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createMovie, getAllMovies, updateMovie, deleteMovie } = require('../controllers/moviecontroller');
const movierouter = express.Router();

movierouter.get('/getallmovie', getAllMovies);
movierouter.post('/addmovie', authMiddleware, createMovie);
movierouter.put('/updatemovie/:id', authMiddleware, updateMovie);
movierouter.delete('/deletemovie/:id', authMiddleware, deleteMovie);

module.exports = movierouter;
