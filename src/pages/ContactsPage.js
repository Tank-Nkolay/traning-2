import { useEffect } from 'react';
// ===== styled ========
import { Box } from '@chakra-ui/react';
import css from './ContactsPage.module.css';
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
      w="564px"
      mt="24px"
      ml="auto"
      mr="auto"
      pl="32px"
      pr="32px"
      pt="16px"
      pb="16px"
      rounded="md"
    >
      <Box className={css.mainCard}>
        <ContactItem />
        <Filter />
      </Box>

      <Box className={css.secondCard}>
        <ContactList />
      </Box>

      {error}
    </Box>
  );
}
