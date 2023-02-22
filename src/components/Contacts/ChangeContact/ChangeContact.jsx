import { Modal } from '../Modal/Modal';
import { ChangeContactForm } from '../ChangeContactForm/ChangeContactForm';
import { useState } from 'react';

export const ChangeContact = ({ id }) => {
  const [addContact, setAddContact] = useState(false);

  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  return (
    <>
      <button type="button" onClick={toggleModal} variant="contained">
        Change
      </button>
      {addContact && (
        <Modal toggleModal={toggleModal}>
          <ChangeContactForm id={id} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
