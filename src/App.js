import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "./screens/BasicInfo";
import CovidScreen from "./screens/CovidScreen";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Shop from "./screens/Shop";
import ShopScreen from "./screens/ShopScreen";
import Dashboard from "./screens/dashboard";
import AdminShop from "./screens/dashboard/views/Shop";
import ProductListView from "./screens/shago/ProductsList";
import ProductDetailView from "./screens/shago/ProductDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-info" element={<BasicInfo />} /> 
        <Route path="/covid-travel" element={<CovidScreen />} />
        <Route path="/product-details" element={<ProductDetailView/>} />
        <Route path="/shop" element={<ProductListView/>} />
        <Route path="/admin" element={<Dashboard/>}>
          <Route path="shop" element={<AdminShop/>}/>
        </Route>
      </Routes>
    </>
  );
}
