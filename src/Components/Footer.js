import { translations } from "../../src/translations";
import { useLanguage } from "./LanguageContext";
const Footer = () => {
  const language = useLanguage();

  return (
    <div className="footer">
      <p> {translations.footer[language]}</p>
    </div>
  );
};

export default Footer;
