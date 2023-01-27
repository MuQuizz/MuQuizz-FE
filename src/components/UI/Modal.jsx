import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { useDispatch } from "react-redux";
import { changeModalStatus } from "../../store/modalSlice";

const Backdrop = ({ onCancel }) => {
  return <div onClick={onCancel} className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className="styles content">{children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

// 포탈을 사용해서 모달을 만들어 볼것임
const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const cancelModal = () => {
    dispatch(changeModalStatus());
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCancel={cancelModal} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </>
  );
};

export default Modal;
