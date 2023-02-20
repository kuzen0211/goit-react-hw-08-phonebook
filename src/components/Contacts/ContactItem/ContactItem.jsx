import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactItem.styled';

export const ContactItem = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </List>
  );
};

ContactItem.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
