import React from 'react';
import './search.styles.scss';

const Search = ({ handleChange }) => (
  <div className="search">
    <div className="search-box">
      <input
        className="search-field"
        type="search"
        placeholder="Search for Pokemon..."
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Search;