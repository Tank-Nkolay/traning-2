import React from 'react';
import PropTypes from 'prop-types';
import { BoxContacts, Li } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <BoxContacts>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </Li>
      ))}
    </BoxContacts>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
