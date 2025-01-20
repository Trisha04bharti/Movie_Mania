import React, { useState, useCallback } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;



