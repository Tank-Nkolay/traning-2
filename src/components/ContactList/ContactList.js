import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container, ContactWrapper } from './ContactList.styled';
import Item from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normFilter = filter.value.toLowerCase();

  const filteredContacts = contacts.contactList.filter(({ name }) =>
    name?.toLowerCase()?.includes(normFilter)
  );

  return (
    <Container>
      {contacts.contactList.length > 0 && (
        <>
          <ContactWrapper>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id} id={id} name={name} number={number} />
            ))}
          </ContactWrapper>
        </>
      )}
    </Container>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
