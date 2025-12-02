import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Right_section = ({ onReviewClick, product }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(product.rating || 0);
  const [hover, setHover] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(product.wishlistCount || 0);
  const [justAddedToCart, setJustAddedToCart] = useState(false);

  // Resolve image URL
  const imgSrc =
    product.image?.startsWith("http")
      ? product.image
      : `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${product.image || ""}`;

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id || product.id,
      name: product.name || product.title,
      price: product.price,
      author: product.author || "Unknown",
      img: imgSrc,
      category: product.category || "Misc",
      quantity: 1,
      isCourse: product.isCourse || false,
    };

    dispatch(addToCart(cartItem));
    setJustAddedToCart(true);
    setTimeout(() => setJustAddedToCart(false), 1800);
  };

  const toggleWishlist = () => {
    setIsWishlisted((prev) => {
      const next = !prev;
      setWishlistCount((c) => (next ? c + 1 : c - 1));
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-md pt-6 text-[#666666]">
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#333333]">
          {product.name || product.title}
        </h2>

        {/* Price */}
        <p className="text-lg font-bold text-[#333333] mt-2">
          Price: {product.price} BDT
        </p>

        {/* Author */}
        <p className="mt-2 font-semibold text-sm">
          by {product.author || "Unknown"}
        </p>

        {/* Stock */}
        <div className="w-55 my-4 border border-blue-600 text-[#666666] px-3 py-1 rounded-md text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2" />
          In Stock (only {product.stock || 10} left!)
        </div>

        {/* Wishlist */}
        <button
          onClick={toggleWishlist}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
        >
          {isWishlisted ? (
            <AiFillHeart className="text-red-500 text-lg" />
          ) : (
            <AiOutlineHeart className="text-gray-500 text-lg" />
          )}
          <span>
            {isWishlisted ? "Added to wishlist" : "Add to wishlist"} (
            {wishlistCount})
          </span>
        </button>

        {/* Category */}
        <p className="mt-3 text-sm">
          <span className="font-medium">Category:</span> {product.category || "Misc"}
        </p>

        {/* Add to Cart */}
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
          {justAddedToCart && (
            <span className="ml-3 text-sm text-green-600 font-medium">
              Added to cart ✓
            </span>
          )}
        </div>

        <hr className="my-6 border-[#D9D9D9]" />

        {/* Ratings */}
        <h3 className="text-lg font-semibold">Reviews and Ratings</h3>
        <div className="mt-4">
          <div className="text-[51px]">{product.rating || 0}</div>
          <div className="flex mt-2 text-yellow-500 text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={i < (product.rating || 0) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            ({product.reviewsCount || 0} Ratings and {product.reviewsCount || 0} Reviews)
          </p>
        </div>

        {/* Rate this product */}
        <div className="mt-6">
          <p className="font-medium">Rate this product</p>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  className="text-2xl focus:outline-none"
                >
                  {starValue <= (hover || rating) ? (
                    <AiFillStar className="text-yellow-500" />
                  ) : (
                    <AiOutlineStar className="text-gray-300" />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={onReviewClick}
            className="mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm"
          >
            Write Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right_section;
