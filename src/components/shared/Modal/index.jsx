import React from "react";
import "./index.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "display-block" : "display-none";

  return (
    <div className={showHideClassName}>
      <div className={"modal"} onClick={handleClose}></div>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose} className="close__button">
          <i className="fas fa-times"></i>
        </button>
      </section>
    </div>
  );
};

export default Modal;
