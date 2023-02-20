import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../../redux/contacts/contactApi';

import { Wraper, Label, Input, Button } from './Form.styled';
import Notiflix from 'notiflix';

export const Form = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const check = contacts.map(contact => contact.name);
    if (check.includes(name)) {
      e.currentTarget.reset();
      return Notiflix.Notify.info(`${name} is already in contacts`);
    }

    createContact({ name, number });
    Notiflix.Notify.success(`Added contact ${name}`);
    e.currentTarget.reset();
  };

  return (
    <Wraper onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Wraper>
  );
};
