import React from 'react';

const ProductTable = ({ data }) => {
  return (
    <div className="w-full px-0 sm:px-0.5">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Product List</h1> {/* Slightly smaller text */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-1 sm:px-2 py-2 text-left">ID</th> {/* Reduced padding for cells */}
              <th className="px-1 sm:px-2 py-2 text-left">Name</th>
              <th className="px-1 sm:px-2 py-2 text-left">Category</th>
              <th className="px-1 sm:px-2 py-2 text-left">Subcategory</th>
              <th className="px-1 sm:px-2 py-2 text-left">Created At</th>
              <th className="px-1 sm:px-2 py-2 text-left">Updated At</th>
              <th className="px-1 sm:px-2 py-2 text-left">Price</th>
              <th className="px-1 sm:px-2 py-2 text-left">Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="border-t border-gray-300">
                <td className="px-1 sm:px-2 py-2">{product.id}</td>
                <td className="px-1 sm:px-2 py-2">{product.name}</td>
                <td className="px-1 sm:px-2 py-2">{product.category}</td>
                <td className="px-1 sm:px-2 py-2">{product.subcategory}</td>
                <td className="px-1 sm:px-2 py-2">{new Date(product.createdAt).toLocaleString()}</td>
                <td className="px-1 sm:px-2 py-2">{new Date(product.updatedAt).toLocaleString()}</td>
                <td className="px-1 sm:px-2 py-2">${product.price.toFixed(2)}</td>
                <td className="px-1 sm:px-2 py-2">{product.sale_price ? `$${product.sale_price.toFixed(2)}` : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
