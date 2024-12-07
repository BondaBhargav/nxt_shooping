import ProductRoute from "./components/Products";
import Home from "./components/Home";

import React from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductItemDetails from "./components/ProductItemDetails";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductRoute/>}/>
        <Route path="/products/:id" element={<ProductItemDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  );
};
export default App;
