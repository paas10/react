import reactDom from 'react-dom';
import styles from './Modal.module.css'

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onCloseModal} />
};

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal} />, portalElement)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;