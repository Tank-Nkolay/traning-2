import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import ContactList from 'components/ContactList';
import { ContactItem } from 'components/ContactEditor/ContactItem';

import { Filter } from 'components/Filter/Filter';
import { Box } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box h="100vh" w="564px" ml="auto" mr="auto" p="32px">
      <ContactItem />
      <Filter />
      <ContactList />
      {error}
    </Box>
  );
}

// rounded = 'md';
// bg="gray.100" align="center" justify="center" h="100vh"
// justifyContent="center"
// gap="10px"
// wrap="wrap"
// backgroundColor="#F7FAFC"
