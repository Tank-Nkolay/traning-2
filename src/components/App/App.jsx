import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ======================================================
import Section from '../../Section/Section';
import { Markup } from './App.styled';
// ======================================================
import FormEl from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title/Title';
import { fetchContacts } from '../../redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from '../Loader';
// ======================================================
// ======================================================

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Markup>
        <Title title="Phonebook" />
        <FormEl />
        <Filter title="Find contacts by name" />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Markup>
    </Section>
  );
}
