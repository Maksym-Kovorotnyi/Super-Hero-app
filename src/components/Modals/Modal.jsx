import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRoot);
};

export default Modal;
