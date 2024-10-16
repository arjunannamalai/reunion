import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Close icon

const FilterPanel = ({ showFilter, visibleColumns, setVisibleColumns, closeFilter }) => {
  // Toggle column visibility
  const handleColumnVisibility = (column) => {
    setVisibleColumns({ ...visibleColumns, [column]: !visibleColumns[column] });
  };

  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
        showFilter ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Filter Columns</h2>
          <button onClick={closeFilter} className="text-gray-600">
            <FaTimes />
          </button>
        </div>

        {/* Checkbox for each column */}
        {Object.keys(visibleColumns).map((column) => (
          <div key={column} className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={visibleColumns[column]}
                onChange={() => handleColumnVisibility(column)}
                className="mr-2"
              />
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
