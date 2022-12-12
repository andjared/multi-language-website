import { Link } from "react-router-dom";
import { translations } from "../translations";
import logo from "../assets/images/logo.png";
import {
  FaInstagram,
  FaBehanceSquare,
  FaLinkedin,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { Select } from "./Select";

const Navbar = ({
  language,
  handleChangeLanguage,
  showHiddenNav,
  setShowHiddenNav,
}) => {
  const [selected, setSelected] = useState("serbian");

  // const [showHiddenNav, setShowHiddenNav] = useState(false);

  const { home, aboutUs, services, gallery, contact } = translations.navbar;

  const handleHiddenNav = () => {
    setShowHiddenNav((prev) => !prev);
  };

  const closeHiddenNavOnResize = useCallback(() => {
    const media = window.matchMedia("(min-width : 860px)");
    if (media.matches) {
      setShowHiddenNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", closeHiddenNavOnResize);

    return () => window.removeEventListener("resize", closeHiddenNavOnResize);
  }, [closeHiddenNavOnResize]);

  return (
    <header className={showHiddenNav ? "transparent" : null}>
      <div className={showHiddenNav ? "closed" : "logo"}>
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <div
        className={showHiddenNav ? "closed" : "menu-btn"}
        onClick={handleHiddenNav}
      >
        <FaBars />
      </div>
      <nav className={showHiddenNav ? "hidden-nav" : "main-nav"}>
        <>
          {showHiddenNav ? (
            <div className="close-btn" onClick={handleHiddenNav}>
              <FaTimes />
            </div>
          ) : (
            <Select
              selected={selected}
              setSelected={setSelected}
              changeLanguage={handleChangeLanguage}
            />
          )}

          <div
            className={`links ${showHiddenNav ? "open" : "closed"}`}
            onClick={() => showHiddenNav && setShowHiddenNav(false)}
          >
            <ul className="pages-links">
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
            <ul className="social-links">
              <li>
                <a
                  href="https://www.behance.net/musmulica104166?fbclid=IwAR0JWTmHbbkSXMWf5sux4ac3fHH2tk0ttvZKfoTKmLJ9km1kEia2XAO7f9A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBehanceSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marjana-selakovic-259599177/?fbclid=IwAR0tK0LZLERgHK6305ZB6i_2oVnvkJRYWvuu0pK4fbNsZGswLzB9FuqeHjU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/landessence/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCDdPdssHf7eVtFd4zCoCf7Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </>
      </nav>
    </header>
  );
};

export default Navbar;
