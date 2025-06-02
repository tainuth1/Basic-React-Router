import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Dashboard from "../pages/dashboard/Dashboard";
import Main from "../pages/dashboard/Main";
import ProtectedRoute from "./ProtectedRoute";
import ViewProduct from "../pages/dashboard/ViewProduct";
import UpdateProduct from "../pages/dashboard/UpdateProduct";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile/:id" element={<Profile />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {/* <Route path="" element={<Main />} /> */}
        {/* OR */}
        <Route index element={<Main />} />
        <Route path="view-product" element={<ViewProduct />} >
          <Route path="edit-product" element={<UpdateProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
