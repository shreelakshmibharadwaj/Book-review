import React from 'react';
import '../index.css'; // Ensure the file is imported for global styles

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
