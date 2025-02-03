// src/components/SearchBar.jsx
import React, { useState, useCallback } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Use useCallback to avoid recreating the debounced function unnecessarily.
  const handleSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 500),
    [onSearch]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <i className="fa fa-search"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

