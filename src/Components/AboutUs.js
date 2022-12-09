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
    <section className="page about-us">
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
              <li key={logo.id}>
                <img src={logo.url} alt={logo.url} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
