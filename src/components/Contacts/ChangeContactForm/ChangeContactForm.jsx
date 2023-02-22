import { useDispatch, useSelector } from 'react-redux';
import {
  ContactFrm,
  FormLabel,
  FormInput,
  FormBtn,
} from './ChangeContact.styled';

import { selectContact } from '../../../redux/contacts/contactApi.selector';
import { useState } from 'react';
import { useChangeContactMutation } from 'redux/contacts/contactApi';

export const ChangeContactForm = ({ id, toggleModal }) => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const [changeContact] = useChangeContactMutation();

  const [name, setName] = useState(() => {
    const { name } = contacts.find(contact => contact.id === id);
    return name;
  });

  const [number, setNumber] = useState(() => {
    const { number } = contacts.find(contact => contact.id === id);
    return number;
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    // const updatedContact = { name number };

    changeContact({ id });
    reset();
    toggleModal();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div padding={5} width="400px">
      <ContactFrm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <FormBtn variant="contained" aria-label="add contact" type="submit">
          Change contact
        </FormBtn>
      </ContactFrm>
    </div>
  );
};
