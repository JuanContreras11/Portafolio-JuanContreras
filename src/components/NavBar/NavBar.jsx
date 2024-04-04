import React from "react";
import "./NavBar.css";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="navWrapper">
        <div className="nav-content">
          {/* <img className="logo" src="../public/vite.svg" alt="" /> */}
          <h1 className="logo">Juan Contreras </h1>
          <ul className="nav-links">
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Expirience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Contactame
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons">
              {openMenu ? "close" : "menu"}
              </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
