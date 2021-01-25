import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.scss";

import logo from "../../assets/img/logo2.png";


const Navbar = () => {
  const [click, setClick ] = useState(false)
  const [navbar, setNavbar ] = useState(false)

  const handleClick = () => setClick(!click)


  const stickyBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    }
  }

  window.addEventListener('scroll', stickyBackground);


    return (
      <nav className={navbar ? 'navbar sticky' : 'navbar'}>
        <div className="navbar_logo">
          <a
            href="http://stomatologiazwierzat.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="logo stomatologia zwierząt" />
          </a>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <span
            className={ click ? "fas fa-times" : "fas fa-bars"}
          ></span>
        </div>


        <div className={
              click ? "navbar_menu active" : "navbar_menu"
            }>
          <ul className="navbar_social">
            <li>
              <a onClick={handleClick}
                href="https://www.facebook.com/stomatologiazwierzat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a onClick={handleClick}
                href="https://www.instagram.com/stomatologiazwierzat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>

            <li>
              <Link onClick={handleClick}
                to="lecznice"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-100}
                isDynamic={true}
              >
                <button className="header_button">
                  <i className="fas fa-phone-alt"></i>umów wizytę
                </button>
              </Link>
            </li>
          </ul>

          <ul className="navbar_items">
            <li>
              <Link
                onClick={handleClick}
                className="navbar_text"
                activeClass="active"
                to="strona_glowna"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-100}
                isDynamic={true}
              >
                strona główna
              </Link>
            </li>

            <li>
                <Link
                  onClick={handleClick}
                  className="navbar_text"
                  activeClass="active"
                  to="o_mnie"
                  smooth={true}
                  spy={true}
                  duration={1000}
                  delay={400}
                  offset={-100}
                  isDynamic={true}
                >
                  o mnie
                </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                className="navbar_text"
                activeClass="active"
                to="uslugi"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-90}
                isDynamic={true}
              >
                usługi
              </Link>
            </li>

            <li>
              <Link
                onClick={handleClick}
                className="navbar_text"
                activeClass="active"
                to="kontakt"
                smooth={true}
                spy={true}
                duration={1000}
                delay={400}
                offset={-80}
                isDynamic={true}
              >
                kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;

