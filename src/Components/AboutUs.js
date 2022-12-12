import { translations } from "../../src/translations";
import imageProject from "../assets/images/aboutus.jpg";
import logos from "../assets/logos";
import { useEffect } from "react";
import useToggleScroll from "./useToggleScroll";

const AboutUs = ({ language }) => {
  const { handleScroll, isDesktop } = useToggleScroll();

  useEffect(() => {
    window.addEventListener("resize", handleScroll);
    if (document.readyState === "complete") {
      handleScroll();
    } else {
      window.addEventListener("load", handleScroll);
    }
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, [isDesktop, handleScroll]);

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
