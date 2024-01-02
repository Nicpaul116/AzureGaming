import React, { useState } from "react";
import logo from "../../assets/mascot (2).png";
import "./navbar.css";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Games">Games</a>
        </li>
        <li>
          <a href="/Gamedetails">Game details</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar-all">
      <div className="navbar-wrap">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          <div className="links-ref">{Menu}</div>
          <div className="navbar-button">
            <button>Sign in</button>
          </div>
        </div>
        <div>{toggleMenu}</div>
        <div className="menu-wrap">
          <div className="togglemenu">
            {toggleMenu ? (
              <IoMdClose size={30} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Fill size={30} onClick={() => setToggleMenu(true)} />
            )}
          </div>
          {toggleMenu && (
            <div className="navbar-menu">
              <div className="menu-links">
                <div className="links-ref2">
                  <p>
                    <a href="/">Home</a>
                  </p>
                  <p>
                    <a href="/Games">Games</a>
                  </p>
                  <p>
                    <a href="/Gamedetails">Game details</a>
                  </p>
                  <p>
                    <a href="/Contact">Contact</a>
                  </p>
                </div>
                <div className="signin">
                  <p>Sign in</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
