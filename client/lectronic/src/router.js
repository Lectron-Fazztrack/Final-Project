import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Register from './pages/register'
import Login from './pages/login'
import User from './pages/user'
import Profile from './pages/profile'
import Cart from './pages/cart/cart'
import DetailProduct from './pages/product/detail'
import Checkout from './pages/checkout/checkout'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/detail/:id" element={<DetailProduct />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
