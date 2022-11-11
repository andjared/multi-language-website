import { translations } from "../../src/translations";

const Modal = ({ handleModal, successMessage, language }) => {
  const { success, failed } = translations.modal;
  console.log(successMessage);

  return (
    <div className="email-form">
      {successMessage ? (
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{success.header[language]}</h4>
          </div>
          <div className="modal-body">
            <h4>{success.content[language]}</h4>
          </div>
          <div className="modal-footer">
            <button className="btn" onClick={handleModal}>
              {success.button[language]}
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{failed.header[language]}</h4>
          </div>
          <div className="modal-body">
            <h4>{failed.content[language]}</h4>
          </div>
          <div className="modal-footer">
            <button className="btn" onClick={handleModal}>
              {failed.button[language]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
