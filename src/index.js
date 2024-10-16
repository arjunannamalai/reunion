import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './ProductTable.js';
import sampleData from './data/sampledata.json';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <ProductTable data={sampleData} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
