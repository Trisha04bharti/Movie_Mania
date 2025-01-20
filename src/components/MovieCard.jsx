import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <h3>{movie.title}</h3>
    <p>Release Date: {movie.release_date}</p>
  </div>
);

export default MovieCard;

