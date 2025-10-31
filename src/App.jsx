import { Routes, Route } from "react-router-dom";
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
      <Route path="/" element={<DashboardLayout />}>
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
