import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Id_Recovery from "./pages/auth/Id_Recovery";
import SignIn from "./pages/auth/SignIn";
import Blog from "./pages/blog/Blog";
import CoursePage from "./pages/coursePage/CoursePage";
import Empowering_Student_Combine from "./pages/empowering_student_combine/Empowering_Student_Combine";
import Cource_overview from "./pages/course_overview/Course_overview";
import CartSection from "./pages/cart/CartSection";
import Checkout from "./pages/checkout/Checkout";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/user/Dashboard";
import Profile from "./pages/dashboard/user/Profile";
import EnrolledCourses from "./pages/dashboard/user/EnrolledCourses";
import Purchases from "./pages/dashboard/user/Purchases";
import Wishlist from "./pages/dashboard/user/Wishlist";
import Review from "./pages/dashboard/user/Review";
import Wallet from "./pages/dashboard/user/Wallet";
import Support from "./pages/dashboard/user/Support";
import Settings from "./pages/dashboard/user/Settings";
import StripePayment from "./pages/stripe-payment/StripePayment";
import PaymentSuccess from "./pages/stripe-payment/PaymentSuccess";
import E_learning from "./pages/e-learning/E_learning";
import E_commerce from "./pages/e-commerce/E_commerce";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import SellerDashboard from "./pages/dashboard/seller/SellerDashboard";
import SellerRegister from "./pages/auth/seller/SellerRegister";
import SellerLogin from "./pages/auth/seller/SellerLogin";
// import Catagory from "./pages/catagory/Catagory";
// import Catagories from "./pages/e-commerce/Categories";

function App() {
  return (
      <Routes>
          {/* Normal Routes */}
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route index path="/" element={<Empowering_Student_Combine />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget-password" element={<Id_Recovery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path= "course-details/:id" element={<Cource_overview />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/e-commerce" element={<E_commerce />} />
        <Route path="/courses" element={<E_learning />} />
        <Route path="/stripe-pay" element={<StripePayment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        
          {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="enrolled" element={<EnrolledCourses />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="review" element={<Review />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        </Route>

        {/* Seller nested routes */}
        <Route path ="/seller/dashboard" element={<SellerDashboard />}>
        <Route index element={<SellerDashboard />} />
        </Route>
        
        {/* Admin nested routes */}
        <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<AdminDashboard />} />
        </Route>

      </Routes>
  );
}

export default App;