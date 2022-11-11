import { translations } from "../../src/translations";

const Modal = ({ handleModal, successMessage, language }) => {
  const { success, failed } = translations.modal;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">
            {successMessage
              ? success.header[language]
              : failed.header[language]}
          </h4>
        </div>
        <div className="modal-body">
          <h4>
            {successMessage
              ? success.content[language]
              : failed.content[language]}
          </h4>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={handleModal}>
            {successMessage
              ? success.button[language]
              : failed.button[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
