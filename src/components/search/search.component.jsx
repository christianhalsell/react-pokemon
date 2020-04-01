import React from 'react';
import './search.styles.scss';

const Search = ({ handleChange, placeholder }) => (
  <div className="search">
    <div className="search-box">
      <input
        className="search-field"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Search;