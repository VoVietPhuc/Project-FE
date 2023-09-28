import React from "react";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import Admin from "./pages/Admin";
const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  )
};

export default App;
