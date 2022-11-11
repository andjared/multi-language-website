import { translations } from "../../src/translations";
const Footer = ({ language }) => {
  return (
    <footer>
      <p>{translations.footer[language]}</p>
    </footer>
  );
};

export default Footer;
