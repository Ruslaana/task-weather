import React, { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ children, isOpen, onClose }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };// eslint-disable-next-line 
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div>
        <span className={styles.close} onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
