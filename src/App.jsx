import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EnrolledCourses from "./pages/EnrolledCourses";
import Purchases from "./pages/Purchases";
import Wishlist from "./pages/Wishlist";
import Review from "./pages/Review";
import Wallet from "./pages/Wallet";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

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
