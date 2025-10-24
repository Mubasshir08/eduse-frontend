import React from "react";
import Checkout from "./pages/Checkout";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

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
