import { Link } from "react-router-dom";
import { translations } from "../translations";
import logo from "../assets/images/logo.png";
import {
  FaInstagram,
  FaBehanceSquare,
  FaLinkedin,
  FaYoutube,
  FaBars,
} from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { Select } from "./Select";

const Navbar = ({ language, handleChangeLanguage }) => {
  const [selected, setSelected] = useState("serbian");

  const [hiddenMenu, setHiddenMenu] = useState(false);

  const { home, aboutUs, services, gallery, contact } = translations.navbar;

  const handleHiddenMenu = () => {
    setHiddenMenu(!hiddenMenu);
  };

  const closeHiddenMenuOnResize = useCallback(() => {
    const media = window.matchMedia("(min-width : 860px)");
    if (media.matches) {
      setHiddenMenu(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", closeHiddenMenuOnResize);
    return () => window.removeEventListener("resize", closeHiddenMenuOnResize);
  }, [closeHiddenMenuOnResize]);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <div className="hidden-menu">
        <FaBars />
      </div>
      <nav className={hiddenMenu ? "hidden-nav" : "main-nav"}>
        <>
          <Select
            selected={selected}
            setSelected={setSelected}
            changeLanguage={handleChangeLanguage}
          />
          <div className={hiddenMenu ? "open" : "closed"}>
            <ul className="pages-links" onClick={handleHiddenMenu}>
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
