const Movie = require('../models/movie');

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createMovie = async (req, res) => {
  const { title, genre, director, releaseYear, description } = req.body;
  try {
    const newMovie = new Movie({ title, genre, director, releaseYear, description });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: 'Error adding movie' });
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: 'Error updating movie' });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting movie' });
  }
};

module.exports = { getAllMovies, createMovie, updateMovie, deleteMovie };
