import { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="/assets/logo.png" />
          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experiences"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
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
