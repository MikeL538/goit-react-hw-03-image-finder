import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import css from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({ selectedImage, closeModal }) => {
  return (
    <ReactModal
      isOpen={!!selectedImage}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        X
      </button>
      {selectedImage && (
        <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
      )}
    </ReactModal>
  );
};

export default Modal;
