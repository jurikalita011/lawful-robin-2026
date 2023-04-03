import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import HomePageMen from "../men/homepageMen";
import SingleProductId from "../cart/SingleProId";
import ProductsW from "../products/WallProducts";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/homeM" element={<HomePageMen />}/>
      <Route path="/women" element={<ProductsW/>}/>
      <Route path="/womensAllProducts/:id" element={<SingleProductId/>} />
      
    </Routes>
  );
};

export default Allroutes;
