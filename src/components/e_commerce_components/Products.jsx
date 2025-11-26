import React, { useState } from 'react';
import { Heart } from 'lucide-react';

// Import images
import Image1 from "../../assets/images/e_commerce_Images/img1.jpg";
import Image2 from "../../assets/images/e_commerce_Images/img2.jpg";
import Image3 from "../../assets/images/e_commerce_Images/img3.jpg";
import Image4 from "../../assets/images/e_commerce_Images/img4.jpg";
import Image5 from "../../assets/images/e_commerce_Images/img5.jpg";
import Image6 from "../../assets/images/e_commerce_Images/img6.jpg";
import Image7 from "../../assets/images/e_commerce_Images/img7.jpg";
import Image8 from "../../assets/images/e_commerce_Images/img8.jpg";
import Image9 from "../../assets/images/e_commerce_Images/img9.jpg";

// Product data
const productsData = [
  {
    id: 1,
    image: Image1,
    name: "Programming Books Set",
    price: 1500.34,
    rating: 5.4,
    inStock: true,
    bestseller: true
  },
  {
    id: 2,
    image: Image2,
    name: "Stationary Item Set Package",
    price: 1000.34,
    rating: 4.4,
    inStock: true,
    bestseller: true
  },
  {
    id: 3,
    image: Image3,
    name: "Wired & Wireless Gaming Mice",
    price: 2000.50,
    rating: 5.4,
    inStock: true,
    bestseller: true
  },
  {
    id: 4,
    image: Image4,
    name: "RGB Gaming Keyboard 87 Keys",
    price: 1500.34,
    rating: 5.4,
    inStock: true,
    bestseller: true
  },
  {
    id: 5,
    image: Image5,
    name: "Backpack For Men & Women",
    price: 950.54,
    rating: 4.6,
    inStock: true,
    bestseller: false
  },
  {
    id: 6,
    image: Image6,
    name: "BALL PEN - EDGE",
    price: 4.34,
    rating: 5.4,
    inStock: true,
    bestseller: false,
    unit: "(per piece)"
  },
  {
    id: 7,
    image: Image7,
    name: "Handwrite Notes",
    price: 450.34,
    rating: 3.4,
    inStock: true,
    bestseller: false
  },
  {
    id: 8,
    image: Image8,
    name: "Sunglass For Men",
    price: 1000.34,
    rating: 3.5,
    inStock: true,
    bestseller: false
  },
  {
    id: 9,
    image: Image9,
    name: "Nike Baseball Cap",
    price: 450.34,
    rating: 2.4,
    inStock: true,
    bestseller: false
  }
];

// Product Card Component
const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
            <span className="text-gray-700 font-medium">{product.rating}</span>
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
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;