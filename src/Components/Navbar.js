import { Link, useHistory } from "react-router-dom";
import { translations } from "../translations";
import logo from "../assets/images/logo.png";
import { useLanguage, useUpdateLanguage } from "./LanguageContext";
import {
  FaGlobe,
  FaInstagram,
  FaBehanceSquare,
  FaLinkedin,
  FaYoutube,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const language = useLanguage();
  const handleChangeLanguage = useUpdateLanguage();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { home, aboutUs, services, gallery, contact } = translations.navbar;
  let history = useHistory();

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  const backToHome = () => {
    history.push("/");
  };

  return (
    <nav className="nav-bar">
      <div className={`logo ${hamburgerMenu ? "closed" : "show"}`}>
        <i>
          <img src={logo} alt="" onClick={backToHome} />
        </i>
      </div>

      <div className="lang">
        <i>
          <FaGlobe />
        </i>
        <select
          value={language}
          id="language"
          onChange={(e) => handleChangeLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="serbian">Srpski</option>
        </select>
      </div>
      <i id="hamburger-menu-icon" onClick={handleHamburgerMenu}>
        <FaBars />
      </i>
      <div className={`nav-links ${hamburgerMenu ? "open" : "closed"}`}>
        <ul className="pages-links" onClick={handleHamburgerMenu}>
          <li>
            <Link to="/">{home[language]}</Link>
          </li>
          <li>
            <Link to="/about">{aboutUs[language]}</Link>
          </li>
          <li>
            <Link to="/services">{services[language]}</Link>
          </li>
          <li>
            <Link to="/gallery">{gallery[language]}</Link>
          </li>
          <li>
            <Link to="/contact">{contact[language]}</Link>
          </li>
        </ul>
        <div className="social-links">
          <ul>
            <li>
              <i>
                <a
                  href="https://www.behance.net/musmulica104166?fbclid=IwAR0JWTmHbbkSXMWf5sux4ac3fHH2tk0ttvZKfoTKmLJ9km1kEia2XAO7f9A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBehanceSquare />
                </a>
              </i>
            </li>
            <li>
              <i>
                <a
                  href="https://www.linkedin.com/in/marjana-selakovic-259599177/?fbclid=IwAR0tK0LZLERgHK6305ZB6i_2oVnvkJRYWvuu0pK4fbNsZGswLzB9FuqeHjU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </i>
            </li>
            <li>
              <i>
                <a
                  href="https://www.instagram.com/landessence/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </i>
            </li>
            <li>
              <i>
                <a
                  href="https://www.youtube.com/channel/UCDdPdssHf7eVtFd4zCoCf7Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
