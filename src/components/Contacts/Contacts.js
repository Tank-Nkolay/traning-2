import React from 'react';
// import PropTypes from 'prop-types';
import { BoxContacts, Li } from './Contacts.styled';

function Contacts({ contacts }) {
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

export default Contacts;

// FeedbackOptions.propTypes = {
//   clickGood: PropTypes.func.isRequired,
//   clickNeutral: PropTypes.func.isRequired,
//   clickBad: PropTypes.func.isRequired,
// };
