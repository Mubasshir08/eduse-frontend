import { Bell } from "lucide-react";
import Avatar from "../assets/images/avatar-pic.jpg";
import Sidebar from "../components/Sidebar";
import ProgressChart from "../components/ProgressChart";

const Dashboard = () => {
  const progressData = [
    { name: "To Start", value: 60 },
    { name: "In Progress", value: 30 },
    { name: "Complete", value: 10 },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <main className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow p-4 rounded-xl text-center">
            <p className="text-gray-500">Enroll Course</p>
            <h3 className="text-2xl font-bold">1</h3>
          </div>
          <div className="bg-white shadow p-4 rounded-xl text-center">
            <p className="text-gray-500">Active Course</p>
            <h3 className="text-2xl font-bold">1</h3>
          </div>
          <div className="bg-white shadow p-4 rounded-xl text-center">
            <p className="text-gray-500">Complete Course</p>
            <h3 className="text-2xl font-bold">0</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-3">My Courses</h4>
            <div className="border rounded-lg p-3 flex justify-between items-center">
              <div>
                <h5 className="font-semibold text-blue-600">Design Thinking & UX Fundamentals</h5>
                <p className="text-gray-500 text-sm">Created by Sarah, UI Studio</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <p className="text-xs text-right text-gray-500 mt-1">25% Complete</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-3">Progress</h4>
            <ProgressChart data={progressData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
