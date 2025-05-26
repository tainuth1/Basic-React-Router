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
import Settings from "../pages/dashboard/Settings";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users" element={<Users/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Main />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  );
};

export default AppRouter;
