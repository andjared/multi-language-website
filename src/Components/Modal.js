import { translations } from "../../src/translations";

const Modal = ({ handleShow, language }) => {
  const { modal } = translations;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 modal-title>{modal.header[language]}</h4>
        </div>
        <div className="modal-body">
          <h4>{modal.content[language]}</h4>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={handleShow}>
            {modal.button[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
