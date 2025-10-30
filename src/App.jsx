import React from "react";
import SignUp from "./pages/SignUp";
import Id_Recovery from "./pages/Id_Recovery";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog"
import CoursePage from "./pages/CoursePage";
import Empowering_Student_Combine from "./pages/Empowering_Student_Combine";


const App = () => {
  return (
    <> 
      <SignIn /> 
      <SignUp />
      <Id_Recovery />
      <Blog/>
      <CoursePage />
      <Empowering_Student_Combine />
    </>
  );
};

export default App;
