import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Id_Recovery from "./pages/auth/Id_Recovery";
import SignIn from "./pages/auth/SignIn";
import Blog from "./pages/Blog";
import CoursePage from "./pages/CoursePage/CoursePage";
import Empowering_Student_Combine from "./pages/Empowering_Student_Combine/Empowering_Student_Combine";
import Cource_over_view from "./pages/Cource_over_view/Cource_over_view";
import Checkout from "./pages/Checkout/Checkout";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import EnrolledCourses from "./pages/dashboard/EnrolledCourses";
import Purchases from "./pages/dashboard/Purchases";
import Wishlist from "./pages/dashboard/Wishlist";
import Review from "./pages/dashboard/Review";
import Wallet from "./pages/dashboard/Wallet";
import Support from "./pages/dashboard/Support";
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
      <Routes>
          {/* Normal Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget-password" element={<Id_Recovery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/empowering_student_combine" element={<Empowering_Student_Combine />} />
        <Route path="/cource_over_view" element={<Cource_over_view />} />
        <Route path="/checkout" element={<Checkout />} />
        
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

      </Routes>
  );
}

export default App;