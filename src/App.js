import React from "react";
import { Contact, Home, Games, Gamedetails } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="app-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamedetails" element={<Gamedetails />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
