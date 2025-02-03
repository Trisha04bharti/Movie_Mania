import React, { useState } from "react";
import api from "./services/api";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    if (!query) {
      setMovies([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.get("/search/movie", {
        params: { query },
      });

      if (response.data.results.length === 0) {
        setError("No movies found. Try a different keyword.");
      }

      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Upper Half Section */}
      <div className="header-container">
        <h1 className="app-title">🎬 Movie Mania</h1>
        <SearchBar onSearch={fetchMovies} />
      </div>

      {/* Movie Display Section */}
      <div className="content-container">
        <div className="movies-section">
          {loading && <p className="loading-text">Loading movies...</p>}
          {error && <p className="error-text">{error}</p>}
          <MovieList movies={movies} />
        </div>

        {/* Attractive Right-Side Section */}
       
      </div>
    </div>
  );
};

export default App;
