import { translations } from "../../src/translations";
import imageProject from "../assets/images/aboutus2.jpg";
import logos from "../assets/logos";
const AboutUs = ({ language }) => {
  return (
    <div className="about-us">
      <div className="top-box">
        <div className="about-us-text">
          <p>{translations.aboutUs[language]}</p>
        </div>
        <div className="img">
          <img src={imageProject} alt="" />
        </div>
      </div>
      <div className="bottom-box">
        <p>{translations.clients[language]} </p>
        {logos.map((logo) => {
          return (
            <img
              src={logo.url}
              alt=""
              key={logo.id}
              className={logo.id === 1 ? "one" : "other"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
