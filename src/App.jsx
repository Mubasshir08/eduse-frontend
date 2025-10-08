import React from "react";
import Navbar from "./Components/Navbar";
import CoursePage from "./Pages/CoursePage";

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <CoursePage />
    </div>
  );
};

export default App;
