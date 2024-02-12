import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CarListing from "../pages/CarListing/CarListing";
import CarDetails from "../pages/CarDetails/CarDetails";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Reservation from "../pages/Reservation/Reservation";
import OrderComplete from "../pages/OrderComplete/OrderComplete";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin/Admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reservation/:id" element={<Reservation />} />
      <Route path="/order-complete" element={<OrderComplete />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Route index element={<Admin />} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
