import React from 'react';
import { nanoid } from 'nanoid';
// импорт функции разметки
import Section from './Section/Section';
import FormInput from './FormInput';
import Contacts from './Contacts';
import { Markup, Title } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    this.addContacts(name);
    this.addContacts(number);
  };

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <Section>
        <Markup>
          <Title>Phonebook</Title>
          <FormInput
            contacts={this.state.contacts}
            onSubmitData={this.formSubmitHandler}
          />
          <Title>Contacts</Title>
          <Contacts contacts={this.state.contacts} />
        </Markup>
      </Section>
    );
  }
}
