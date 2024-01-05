import React, { useState } from "react";
import logo from "../../assets/mascot (2).png";
import "./navbar.css";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = (
    <>
      <ul>
        <li>
          <Link to="/" className="Link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Games" className="Link">
            Games
          </Link>
        </li>
        <li>
          <Link to="/Gamedetails" className="Link">
            Game details
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="Link">
            Contact
          </Link>
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
                    <Link to="/" className="Link1">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/Games" className="Link1">
                      Games
                    </Link>
                  </p>
                  <p>
                    <Link to="/Gamedetails" className="Link1">
                      Game details
                    </Link>
                  </p>
                  <p>
                    <Link to="/Contact" className="Link1">
                      Contact
                    </Link>
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
