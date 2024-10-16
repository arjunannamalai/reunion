import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';

const ProductTable = ({ data = [] }) => {  // Default to empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState({ column: '', direction: '' });
  const [showFilter, setShowFilter] = useState(false); // Controls the visibility of the filter panel
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    category: true,
    subcategory: true,
    createdAt: true,
    updatedAt: true,
    price: true,
    sale_price: true,
  });

  const itemsPerPage = 10;

  // Filtering the data based on search term
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder.column) {
      if (typeof a[sortOrder.column] === 'string') {
        return sortOrder.direction === 'asc'
          ? a[sortOrder.column].localeCompare(b[sortOrder.column])
          : b[sortOrder.column].localeCompare(a[sortOrder.column]);
      } else if (typeof a[sortOrder.column] === 'number') {
        return sortOrder.direction === 'asc'
          ? a[sortOrder.column] - b[sortOrder.column]
          : b[sortOrder.column] - a[sortOrder.column];
      }
    }
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sorting when header is clicked
  const handleSort = (column) => {
    const direction =
      sortOrder.column === column && sortOrder.direction === 'asc' ? 'desc' : 'asc';
    setSortOrder({ column, direction });
  };

  return (
    <div className="w-full px-1 sm:px-2 relative">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Product List</h1>

        {/* Search bar and visibility filter */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          toggleFilter={() => setShowFilter(!showFilter)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {visibleColumns.id && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('id')}>
                  ID {sortOrder.column === 'id' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.name && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('name')}>
                  Name {sortOrder.column === 'name' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.category && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('category')}>
                  Category {sortOrder.column === 'category' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.subcategory && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('subcategory')}>
                  Subcategory {sortOrder.column === 'subcategory' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.createdAt && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('createdAt')}>
                  Created At {sortOrder.column === 'createdAt' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.updatedAt && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('updatedAt')}>
                  Updated At {sortOrder.column === 'updatedAt' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.price && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('price')}>
                  Price {sortOrder.column === 'price' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
              {visibleColumns.sale_price && (
                <th className="px-1 sm:px-2 py-2 text-left cursor-pointer" onClick={() => handleSort('sale_price')}>
                  Sale Price {sortOrder.column === 'sale_price' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((product) => (
              <tr key={product.id} className="border-t border-gray-300">
                {visibleColumns.id && <td className="px-1 sm:px-2 py-2">{product.id}</td>}
                {visibleColumns.name && <td className="px-1 sm:px-2 py-2">{product.name}</td>}
                {visibleColumns.category && <td className="px-1 sm:px-2 py-2">{product.category}</td>}
                {visibleColumns.subcategory && <td className="px-1 sm:px-2 py-2">{product.subcategory}</td>}
                {visibleColumns.createdAt && (
                  <td className="px-1 sm:px-2 py-2">{new Date(product.createdAt).toLocaleString()}</td>
                )}
                {visibleColumns.updatedAt && (
                  <td className="px-1 sm:px-2 py-2">{new Date(product.updatedAt).toLocaleString()}</td>
                )}
                {visibleColumns.price && <td className="px-1 sm:px-2 py-2">${product.price.toFixed(2)}</td>}
                {visibleColumns.sale_price && (
                  <td className="px-1 sm:px-2 py-2">
                    {product.sale_price ? `$${product.sale_price.toFixed(2)}` : 'N/A'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />

      {/* Filter Panel */}
      <FilterPanel
        showFilter={showFilter}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        closeFilter={() => setShowFilter(false)}
      />
    </div>
  );
};

export default ProductTable;
