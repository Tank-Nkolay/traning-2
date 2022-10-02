import React from 'react';
// import PropTypes from 'prop-types';
import { BoxContacts } from './Contacts.styled';

function Contacts({ contacts }) {
  return (
    <BoxContacts>
      {contacts.map(contact => (
        <ul key={1}>
          <li>{contact.name}</li>
        </ul>
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
