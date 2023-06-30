import { useEffect } from 'react';
import React from 'react';

const Modal = ({ closeModal, full }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape);
  }, []);

  const closeOnEscape = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const closeOnClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <div className="Overlay" onClick={e => closeOnClick(e)}>
      <div className="Modal">
        <img src={full} alt="imageeee" />
      </div>
    </div>
  );
};

export default Modal;
