import React from "react";
import { Contact, Home, Games, Gamedetails } from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="app-wrap">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamedetails" element={<Gamedetails />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
