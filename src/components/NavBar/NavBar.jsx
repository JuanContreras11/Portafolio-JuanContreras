import React from "react";
import "./NavBar.css";


function NavBar() {
  return (
    <>
      <nav className="navWrapper">
        <div className="nav-content">
          <img className="logo" src="../public/vite.svg" alt="" />
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

            <button className="contact-btn" onClick={()=>{}}>Contactame</button>
          </ul>

          <button class="menu-btn" onClick={()=>{}}>
          <span className="material-icons">menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
