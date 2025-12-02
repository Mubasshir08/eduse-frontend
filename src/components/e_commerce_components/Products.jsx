import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import axios from 'axios';

// Product Card Component
const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Full URL for product image
  const imgUrl = product.image
    ? `http://localhost:5000${product.image}`
    : "https://via.placeholder.com/400x300?text=Product";

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={imgUrl} 
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Product";
          }}
        />
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
        >
          <Heart 
            size={20} 
            className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-2 font-medium">
            Bestseller
          </div>
        )}

        {/* Product Name */}
        <h3 className="text-gray-700 font-medium text-base mb-2 min-h-[48px] line-clamp-2">
          {product.name}
        </h3>

        {/* Stock Status */}
        <p className="text-blue-600 text-sm font-medium mb-2">
          {product.inStock ? 'In stock*' : 'Out of stock'}
        </p>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900">
            BDT {product.price.toFixed(2)}
          </span>
          {product.unit && (
            <span className="text-sm text-gray-500 ml-1">
              {product.unit}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-medium">{product.rating || 0}</span>
            <svg 
              className="w-5 h-5 text-yellow-400 fill-current" 
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products Component
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        // Backend response: { success, count, data }
        setProductsData(response.data.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-20 text-xl">Loading products...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (productsData.length === 0) return <div className="text-center mt-20 text-xl">No products found.</div>;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
