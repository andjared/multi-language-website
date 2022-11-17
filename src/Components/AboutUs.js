import { translations } from "../../src/translations";
import imageProject from "../assets/images/aboutus.jpg";
import logos from "../assets/logos";
import { useEffect } from "react";

const AboutUs = ({ language }) => {
  useEffect(() => {
    document.body.className = "scroll";
    return () => document.body.classList.remove("scroll");
  }, []);

  return (
    <div className="about-us">
      <div className="top-box">
        <div className="about-us-text">
          <p>{translations.aboutUs[language]}</p>
        </div>
        <div className="img">
          <img src={imageProject} alt={imageProject} />
        </div>
      </div>
      <div className="bottom-box">
        <div className="text">
          <p>{translations.clients[language]} </p>
        </div>
        <ul className="logos">
          {logos.map((logo) => {
            return (
              <li>
                <img src={logo.url} alt={logo.url} key={logo.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
