import { Overlay, Inner, CloseBtn } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const coseModal = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={closeOnClick}>
      <Inner>
        {children}
        <CloseBtn type="button" onClick={toggleModal}>
          x
        </CloseBtn>
      </Inner>
    </Overlay>
  );
};
