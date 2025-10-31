import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Id_Recovery from "./pages/Id_Recovery";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import CoursePage from "./pages/CoursePage";
import Empowering_Student_Combine from "./pages/Empowering_Student_Combine";
import Cource_over_view from "./pages/Cource_over_view";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget-password" element={<Id_Recovery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/empowering_student_combine" element={<Empowering_Student_Combine />} />
        <Route path="/cource_over_view" element={<Cource_over_view />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;