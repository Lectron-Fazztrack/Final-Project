import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Cart from "./pages/cart/cart";
import DetailProduct from "./pages/product/detail";
import History from "./pages/history";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/detail/:id" element={<DetailProduct />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
