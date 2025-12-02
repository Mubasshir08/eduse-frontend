import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import Left_section from "../../components/course_overview_components/Left_section";
import Right_section from "../../components/course_overview_components/Right_section";
import { getProduct } from "../../api/seller"; // your API helper

const Product_overview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id); // fetch product by ID
        const data = response.data || response; // handle API wrapper

        // Ensure the image URL is absolute
        if (data.image && !data.image.startsWith("http")) {
          data.image = `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${data.image}`;
        }

        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20 text-xl">Loading product...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-20 text-xl">Product not found.</p>;

  return (
    <>
      <Navbar />
      <div className="xl:items-start max-w-7xl mx-auto py-4 px-6 flex flex-col xl:flex-row justify-between gap-6">
        {/* ✅ pass resolved image URL */}
        <Left_section product={product} />
        <Right_section product={product} />
      </div>
      <Footer />
    </>
  );
};

export default Product_overview;
