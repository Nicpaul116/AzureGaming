import React from "react";
import { Contact, Home, Games, Gamedetails } from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="app-wrap">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamedetails" element={<Gamedetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
