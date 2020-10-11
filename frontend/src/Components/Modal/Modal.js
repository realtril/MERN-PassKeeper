import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ModalWrapper from 'react-modal';
import style from './Modal.module.css';

const Modal = ({ children, isOpenModal, onToggleModal }) => {
  return (
    <ModalWrapper
      ariaHideApp={false}
      isOpen={isOpenModal}
      onRequestClose={onToggleModal}
      className={style['Modal']}
      overlayClassName={style['Overlay']}
    >
      <CloseIcon
        onClick={onToggleModal}
        className={style.modal__close}
      ></CloseIcon>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
