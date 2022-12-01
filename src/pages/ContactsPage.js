import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';
import ContactList from 'components/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

import { Filter } from 'components/Filter/Filter';

import { Spinner } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <Filter />
        </>
      )}
      <>
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </>
      <ContactList />
      {error}
    </>
  );
}
