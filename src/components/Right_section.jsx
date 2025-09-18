import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(3); // initial learners count
  const [justAddedToCart, setJustAddedToCart] = useState(false);

  const product = {
    id: 1,
    name: "Computer Programming in C for Beginners",
    price: 350,
    author: "Jhon Smith",
    stock: 21,
    category: "Programming | C Language | Beginner-friendly",
  };

  const addToCart = () => {
    setCart((prev) => [...prev, product]);
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
    <div className="max-w-3xl mx-auto  bg-white shadow rounded-md text-[#666666] ">
      <div className="p-6">
        {/* Header / Title */}
        <h2 className="text-xl font-semibold text-[#333333]">{product.name}</h2>

        {/* Price & Short description */}
        <div className="mt-2">
          <p className="text-lg font-bold text-[#333333] ">
            Price: {product.price} BDT
          </p>
          <p className="mt-1 text-gray-600 text-sm">
            Start Learning Programming with C – The Right Way. C programming
            explained in the simplest way with problems, solutions & exercises.
          </p>
          <p className="mt-2 font-semibold  text-sm">by {product.author}</p>
        </div>

        {/* Stock box and Wishlist inline */}
        <div>
          {/* Stock boxed pill */}
          <div className=" w-55 my-4 items-center  border border-blue-600 text-[#666666] px-3 py-1 rounded-md text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2" />
            <span className="leading-none">
              In Stock (only {product.stock} copies left!)
            </span>
          </div>

          {/* Wishlist */}
          <button
            onClick={toggleWishlist}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-pressed={isWishlisted}
          >
            {isWishlisted ? (
              <AiFillHeart className="text-red-500 text-lg" />
            ) : (
              <AiOutlineHeart className="text-gray-500 text-lg" />
            )}
            <span className="">
              {isWishlisted ? "Added to wishlist" : "Add to wishlist"}
            </span>
            <span className="text-xs text-gray-500 ml-2">
              ({wishlistCount} learners have added this book)
            </span>
          </button>
        </div>

        {/* Category */}
        <p className="mt-3 text-sm text-gray-600">
          <span className="font-medium text-gray-800">Category:</span>{" "}
          <span className="text-gray-700">{product.category}</span>
        </p>

        {/* Add to Cart */}
        <div className="mt-4">
          <button
            onClick={addToCart}
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

        {/* About the Author */}
        <div className="mt-6 ">
          <h3 className="font-semibold text-gray-900">About the Author:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
            <li>Experienced software engineer and educator</li>
            <li>
              Over 5 years of teaching programming to students of all levels
            </li>
            <li>
              Taught more than 20,000 learners through both online and offline
              sessions
            </li>
            <li>
              Known for using visual stories and simple language to explain
              complex coding logic
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6">
        {/* Reviews and Ratings */}
        <div className=" mt-10 border-t border-[#D9D9D9] pt-6">
          <div></div>
          <h3 className="text-lg font-semibold">Reviews and Ratings</h3>

          <div className="flex  gap-66 mt-4">
            <div className="order-2">
              {/* Average Rating */}
              <div className="">
                <div className=" text-[51px] ">5</div>
              </div>
              <div>
                <div className=" flex mt-2 text-yellow-500 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <div>
                  <span className=" text-gray-500">
                    (3 Ratings and 0 Reviews)
                  </span>
                </div>
              </div>
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

              <button className="mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm">
                Write Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
