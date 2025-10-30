import React from "react";
import SignUp from "./pages/SignUp";
import Id_Recovery from "./pages/Id_Recovery";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog"


const App = () => {
  return (
    <> 
      <SignIn /> 
      <SignUp />
      <Id_Recovery />
      <Blog/>
    </>
  );
};

export default App;
