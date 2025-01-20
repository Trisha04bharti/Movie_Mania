import React, { useState } from 'react';
import api from './services/api';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }

    try {
      const response = await api.get('/search/movie', {
        params: { query },
      });
      setMovies(response.data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Mania</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

