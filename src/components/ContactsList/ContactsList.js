import React from 'react';
// import PropTypes from 'prop-types';
import { BoxContacts, Li } from './ContactsList.styled';

function ContactsList({ contacts }) {
  return (
    <BoxContacts>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
        </Li>
      ))}
    </BoxContacts>
  );
}

export default ContactsList;

// FeedbackOptions.propTypes = {
//   clickGood: PropTypes.func.isRequired,
//   clickNeutral: PropTypes.func.isRequired,
//   clickBad: PropTypes.func.isRequired,
// };
