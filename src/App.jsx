import React from "react";
import SignUp from "./pages/SignUp";
import Id_Recovery from "./pages/Id_Recovery";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog"
import CoursePage from "./pages/CoursePage";


const App = () => {
  return (
    <> 
      <SignIn /> 
      <SignUp />
      <Id_Recovery />
      <Blog/>
      <CoursePage />
    </>
  );
};

export default App;
