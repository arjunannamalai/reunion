import React from 'react';

const ColumnVisibilityFilter = ({ visibleColumns, handleColumnVisibility, showFilter, setShowFilter }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
        showFilter ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <h2 className="font-bold text-lg mb-4">Filter Columns</h2>
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

export default ColumnVisibilityFilter;
