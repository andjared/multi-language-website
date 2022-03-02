import { useState, useRef } from "react";
import Modal from "./Modal";
import { translations } from "../translations";
import emailjs from "emailjs-com";
import { FaEnvelopeOpenText, FaWhatsapp } from "react-icons/fa";
import MyMap from "./MyMap";
const ContactUs = ({ language }) => {
  // modal settings
  const [showModal, setShowModal] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(true);
  const handleModal = () => {
    setShowModal(false);
  };
  const { name, email, subject, message, button } = translations.form;
  /////////// CONTACT FORM EMAIL.JS  /////////////////////
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_p38jw6o",
        form.current,
        "user_9qqtok280efSdKKxVi3aV"
      )
      .then(
        () => {
          setShowModal(true);
        },
        () => {
          setMessageSuccess(false);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-us">
      {showModal && (
        <Modal
          handleModal={handleModal}
          language={language}
          successMessage={messageSuccess}
        />
      )}
      <form ref={form} onSubmit={sendEmail} className="email-form">
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
      <div className="contact-details">
        <div className="my-map">
          <MyMap />
        </div>
        <ul className="icons">
          <li>
            <i>
              <FaEnvelopeOpenText />
            </i>
            <p>bastaisvasta@gmail.com</p>
          </li>
          <li>
            <i>
              <FaWhatsapp />
            </i>
            <p>+381616123173</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
