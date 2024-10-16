import React from 'react';
import { FaEye } from 'react-icons/fa'; // Eye icon

const SearchBar = ({ searchTerm, setSearchTerm, toggleFilter }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search by name"
        className="border p-2 mr-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="p-2 border" onClick={toggleFilter}>
        <FaEye />
      </button>
    </div>
  );
};

export default SearchBar;
