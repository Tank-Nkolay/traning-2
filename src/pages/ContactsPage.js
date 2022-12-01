import { useEffect } from 'react';
// ===== styled ========
import { Box } from '@chakra-ui/react';
// =====================
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import ContactList from 'components/ContactList';
import { ContactItem } from 'components/ContactEditor/ContactItem';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      h="100vh"
      w="564px"
      mt="32px"
      mb="32px"
      ml="auto"
      mr="auto"
      p="32px"
      rounded="md"
      bgColor="#fff"
    >
      <ContactItem />
      <Filter />
      <ContactList />
      {error}
    </Box>
  );
}
