import Section from '../Section/Section';
import { Markup } from './App.styled';
import FormEl from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title/Title';

export default function App() {
  return (
    <Section>
      <Markup>
        <Title title="Phonebook" />
        <FormEl />
        <Filter title="Find contacts by name" />
        <ContactList />
      </Markup>
    </Section>
  );
}
