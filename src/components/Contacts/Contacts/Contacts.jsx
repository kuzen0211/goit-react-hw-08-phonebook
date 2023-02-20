import { useFetchContactsQuery } from '../../../redux/contacts/contactApi';
import { useState } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { Filter } from '../Filter/Filter';

export const Contacts = () => {
  const { data: contacts } = useFetchContactsQuery();

  const [search, setSearch] = useState('');

  const onChangeInput = e => {
    const text = e.currentTarget.elements.filter.value.toLowerCase();
    setSearch(text);
  };

  const sortedContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(search)
    );
  };

  return (
    <>
      {contacts && (
        <>
          <Filter onChangeInput={onChangeInput} />
          <ContactItem contacts={sortedContacts()} />
        </>
      )}
    </>
  );
};
