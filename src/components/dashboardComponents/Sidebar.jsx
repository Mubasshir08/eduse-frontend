import { NavLink } from "react-router-dom";
import { Home, User, BookOpen, ShoppingCart, Heart, Star, Wallet, Headphones, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "My Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Enrolled Courses", icon: <BookOpen size={18} />, path: "/enrolled" },
    { name: "My Purchases", icon: <ShoppingCart size={18} />, path: "/purchases" },
    { name: "Wish List", icon: <Heart size={18} />, path: "/wishlist" },
    { name: "Review", icon: <Star size={18} />, path: "/review" },
    { name: "Wallet", icon: <Wallet size={18} />, path: "/wallet" },
    { name: "Support", icon: <Headphones size={18} />, path: "/support" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">eduse</h1>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            {link.icon} <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
      <button className="mt-6 flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
