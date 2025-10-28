import React from "react";
import Checkout from "./pages/Checkout";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>    
      <Navbar />
      <Checkout />
      <Footer />
    </>
  );
};

export default App;
