import { Outlet } from "react-router-dom";
import { Bell } from "lucide-react";
import Avatar from "../assets/images/avatar-1.png";
import Sidebar from "../components/dashboardComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Section */}
      <main className="flex-1 p-6">
        {/* Topbar */}
            <div className="flex items-center justify-between pb-3 border-b-[1px] mb-5">
                  <div className="flex items-center gap-3">
                    <img src={Avatar} alt="profile pic" className="w-16 h-16 rounded-full"/>
                    <h2 className="text-xl font-semibold"><span className="font-normal text-gray-500"> Hello, </span> <br />Tanjina Akter 👋</h2>
                  </div>
                  <button className="bg-[#E4EFFF] p-2 rounded-md">
                    <Bell size={22} className="text-gray-600" />
                  </button>
                </div>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
