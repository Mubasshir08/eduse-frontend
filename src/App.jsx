import React from "react";
import SignUp from "./Pages/SignUp";
import Id_Recovery from "./Pages/Id_Recovery";
import SignIn from "./Pages/SignIn";
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
