import { Link } from "react-router-dom";
import { translations } from "../translations";
import logo from "../assets/images/logo.jpg";
import {
  FaGlobe,
  FaInstagram,
  FaBehanceSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Navbar = ({ language, handleChangeLanguage }) => {
  const { home, aboutUs, services, gallery, contact } = translations.navbar;
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" id="logo" />
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
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">{home[language]}</Link>
          </li>
          <li>
            <Link to="/about">{aboutUs[language]}</Link>
          </li>
          <li>
            <Link to="/usluge">{services[language]}</Link>
          </li>
          <li>
            <Link to="/galery">{gallery[language]}</Link>
          </li>
          <li>
            <Link to="/contact">{contact[language]}</Link>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <i>
              <a
                href="https://www.behance.net/musmulica104166?fbclid=IwAR0JWTmHbbkSXMWf5sux4ac3fHH2tk0ttvZKfoTKmLJ9km1kEia2XAO7f9A"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
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
                {" "}
                <FaLinkedin />
              </a>
            </i>
          </li>
          <li>
            <i>
              <a
                href="https://www.instagram.com/bastaisvasta/?hl=sr"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaInstagram />
              </a>
            </i>
          </li>
          <li>
            <i>
              <a
                href="https://www.youtube.com/channel/UC7C3Gq-AndrYfkmJ5ZqsDUw/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
