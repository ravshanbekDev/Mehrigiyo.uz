import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Boshsahifa from "./Pages/Boshsahifa/Boshsahifa";
import Mahsulotlar from "./Pages/Mahsulotlar/Mahsulotlar";
import Footer from "./Components/Footer/Footer";
import Favorite from "./Components/Favorite/Favorite";
import Cart from "./Components/Cart/Cart";

function Authentication() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Boshsahifa />} />
        <Route path="/Mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Authentication;
