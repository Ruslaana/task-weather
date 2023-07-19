import React from 'react';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
        <span onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
  );
}

export default Modal;
