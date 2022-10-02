import React from 'react';
// импорт функции разметки
import Section from './Section/Section';
import FormInput from './FormInput';
import Contacts from './Contacts';
import { Markup, Title } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    const { name } = data;
    this.addContact(name);
  };

  addContact = name => {
    const contact = {
      name,
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
          <Contacts />
        </Markup>
      </Section>
    );
  }
}
