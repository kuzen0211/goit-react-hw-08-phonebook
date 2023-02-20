import { Form } from '../components/Contacts/Form/Form';
import { Contacts } from '../components/Contacts/Contacts/Contacts';

export const Contact = () => {
  return (
    <>
      <div>Phonebook</div>
      <Form />
      <div>Contacts</div>
      <Contacts />
    </>
  );
};
