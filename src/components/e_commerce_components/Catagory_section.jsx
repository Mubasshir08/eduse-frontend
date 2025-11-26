import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CategorySection = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedWarranty, setSelectedWarranty] = useState([]);

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const handleWarrantyChange = (warranty) => {
    setSelectedWarranty(prev =>
      prev.includes(warranty)
        ? prev.filter(w => w !== warranty)
        : [...prev, warranty]
    );
  };

  const handlePriceFilter = () => {
    console.log('Filtering:', { minPrice, maxPrice });
    // Add your filter logic here
  };

  return (
    <aside className="w-full lg:w-1/5 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-4">
      {/* Category Header */}
      <div className="mb-6">
        <h2 className="font-semibold text-xl text-gray-800 mb-2">Category</h2>
        <button className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm">
          Study Materials
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Filter Title */}
      <div className="mb-6">
        <h3 className="text-[#015AD8] text-xl font-bold">Filter</h3>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Price</h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-20 px-2 py-1.5 text-center text-sm rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-20 px-2 py-1.5 text-center text-sm rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handlePriceFilter}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-10 h-10 px-1 flex justify-center items-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Store Rating Filter */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">Store Rating</h4>
        <p className="text-gray-500 text-xs mb-4">Based on a 5-star rating system</p>
        
        <div className="space-y-3">
          {[
            { value: 3.5, label: '3.5 & up' },
            { value: 4.0, label: '4.0 & up' },
            { value: 4.5, label: '4.5 & up' },
            { value: 5.0, label: '5.0 & up' }
          ].map((rating) => (
            <label
              key={rating.value}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating.value)}
                onChange={() => handleRatingChange(rating.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                ⭐ {rating.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Warranty Type Filter */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Warranty Type</h4>
        
        <div className="space-y-3">
          {[
            { value: 'none', label: 'No Warranty' },
            { value: '1year', label: '1 Year Warranty' },
            { value: '2year', label: '2 Year Warranty' }
          ].map((warranty) => (
            <label
              key={warranty.value}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedWarranty.includes(warranty.value)}
                onChange={() => handleWarrantyChange(warranty.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {warranty.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Summary (Optional) */}
      {(selectedRatings.length > 0 || selectedWarranty.length > 0 || minPrice || maxPrice) && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={() => {
              setSelectedRatings([]);
              setSelectedWarranty([]);
              setMinPrice('');
              setMaxPrice('');
            }}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </aside>
  );
};

export default CategorySection;