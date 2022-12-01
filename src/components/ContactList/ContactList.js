import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Box } from '@chakra-ui/react';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name?.toLowerCase()?.includes(normFilter)
    );
  };
  const visibleContacts = filteredContacts();

  return (
    <ul>
      <Box>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </Box>
    </ul>
  );
}
