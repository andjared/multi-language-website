import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import { translations } from "../translations";
import emailjs from "emailjs-com";
import { FaEnvelopeOpenText, FaWhatsapp } from "react-icons/fa";
import MyMap from "./MyMap";

const ContactUs = ({ language }) => {
  useEffect(() => {
    document.body.className = "scroll";
    return () => document.body.classList.remove("scroll");
  }, []);

  // modal settings
  const [showModal, setShowModal] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleMessage = (status) => {
    setShowModal(true);
    setMessageSuccess(status);
    console.log(showModal);
  };

  const handleModal = () => {
    setShowModal(false);
  };
  const { name, email, subject, message, button } = translations.form;
  /////////// CONTACT FORM EMAIL.JS  /////////////////////
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "gmail",
          "template_p38jw6o",
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          () => {
            handleMessage(true);
            e.target.reset();
          },
          (err) => {
            console.log(err.text);
          }
        );
    } catch (err) {
      console.log(err);
      handleMessage(false);
    }
  };

  return (
    <div className="contact-us">
      {showModal ? (
        <Modal
          handleModal={handleModal}
          language={language}
          successMessage={messageSuccess}
        />
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="email-form">
          <label>{name[language]}</label>
          <input type="text" name="name" required />
          <label>{email[language]} </label>
          <input type="email" name="email" required />
          <label>{subject[language]} </label>
          <textarea name="subject" required />
          <label>{message[language]}</label>
          <textarea name="message" required />
          <input type="submit" value={button[language]} className="btn" />
        </form>
      )}

      <div className="contact-details">
        <div className="my-map">
          <MyMap />
        </div>
        <ul className="icons">
          <li>
            <i>
              <FaEnvelopeOpenText />
            </i>
            <a href="mailto:landessencestudio@gmail.com">
              landessencestudio@gmail.com
            </a>
          </li>
          <li>
            <i>
              <FaWhatsapp />
            </i>
            <a href="tel:+381616123173">+381616123173</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
