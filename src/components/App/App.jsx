import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
// глобальные стили
import GlobalStyles from '../GlobalStyles';
// импорт функции разметки
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { Markup, MainTitle, Title } from './App.styled';
import { useLocalSrorage } from '../hooks/useLocalStorage';

// константа локал сторедж
// const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useLocalSrorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    // console.log(name, number);
    const normalizedName = name.toLowerCase();
    if (findDuplicateName(normalizedName)) {
      Notiflix.Notify.info(`${name} is already in your contacts`);
      return;
    }
    addContact(name, number);
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const visibleContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const findDuplicateName = name => {
    return contacts.find(item => item.name.toLowerCase() === name);
  };

  return (
    <Section>
      <GlobalStyles />
      <Markup>
        <MainTitle>Phonebook</MainTitle>
        <ContactsForm onSubmit={formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Markup>
    </Section>
  );
}

// =======================================================================
// ВАРИАНТ БЕЗ ХУКОВ
// =======================================================================
// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     // name: '',
//     // number: '',
//   };

//   // ====================================
//   //   получаем значение записанное в локал сторедж
//   // JSON.parse - чтобы декодировать JSON-строку
//   componentDidMount() {
//     const savedState = localStorage.getItem(LS_KEY);
//     const parsedContacts = JSON.parse(savedState);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   //   записываем в локал сторедж по условию
//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   // ====================================

//   findContactByName = name => {
//     const { contacts } = this.state;
//     return contacts.find(item => item.name.toLowerCase() === name);
//   };

//   formSubmitHandler = data => {
//     const { name, number } = data;
//     // console.log(data);
//     const normalizedName = name.toLowerCase();
//     if (this.findContactByName(normalizedName)) {
//       Notiflix.Notify.warning(`${name} is already in contacts`, {
//         position: 'center-top',
//         width: '500px',
//         fontSize: '32px',
//       });
//       return;
//     }
//     this.addContacts(name, number);
//   };

//   addContacts = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };
//   // ====================================

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Section>
//         <GlobalStyles />
//         <Markup>
//           <MainTitle>Phonebook</MainTitle>
//           <ContactsForm onSubmit={this.formSubmitHandler} />
//           <Title>Contacts</Title>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactsList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Markup>
//       </Section>
//     );
//   }
// }
// =======================================================================
// =======================================================================
