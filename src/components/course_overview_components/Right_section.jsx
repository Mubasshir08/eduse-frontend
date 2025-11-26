import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Right_section = ({ onReviewClick, course }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(3);
  const [justAddedToCart, setJustAddedToCart] = useState(false);

  console.log(course)

  const handleAddToCart = () => {
    // Prepare the product data from course prop with resolved image URL
    const product = {
      id: course.id,
      name: course.title,
      price: course.price,
      author: course.author,
      img: course.img,
      category: course.category || "Programming",
      isCourse: course.isCourse || false
    };

    // Dispatch to Redux store
    dispatch(addToCart(product));
    
    // Show confirmation message
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
        <h2 className="text-xl font-semibold text-[#333333]">{course.title}</h2>
        <p className="text-lg font-bold text-[#333333] mt-2">
          Price: {course.price}
        </p>
        <p className="mt-1 text-gray-600 text-sm">
          {course.title}
        </p>
        <p className="mt-2 font-semibold text-sm">by {course.author}</p>

        <div className="w-55 my-4 border border-blue-600 text-[#666666] px-3 py-1 rounded-md text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2" />
          In Stock (only {course.stock || 21} left!)
        </div>

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

        <p className="mt-3 text-sm">
          <span className="font-medium">Category:</span> {course.category || "Programming"}
        </p>

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

        <h3 className="text-lg font-semibold">Reviews and Ratings</h3>
        <div className="mt-4">
          <div className="text-[51px]">5</div>
          <div className="flex mt-2 text-yellow-500 text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <p className="text-gray-500 text-sm">(3 Ratings and 0 Reviews)</p>
        </div>

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