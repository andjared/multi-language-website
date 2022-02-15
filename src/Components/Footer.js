import { translations } from "../../src/translations";
const Footer = ({ language }) => {
  return (
    <div className="footer">
      <p> {translations.footer[language]}</p>
    </div>
  );
};

export default Footer;
