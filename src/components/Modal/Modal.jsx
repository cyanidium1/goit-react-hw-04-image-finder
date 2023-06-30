import { useEffect } from 'react';
import React from 'react';

const Modal = ({ closeModal, full }) => {
  const close = e => {
    if (e.target === e.currentTarget || e.key === 'Escape') {
      window.removeEventListener('keydown', close);
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', close);
  }, []);

  return (
    <div className="Overlay" onClick={close}>
      <div className="Modal">
        <img src={full} alt="imageeee" />
      </div>
    </div>
  );
};

export default Modal;
