import React from 'react';
// импорт функции разметки
import Section from './Section/Section';
import Phonebook from './Phonebook';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmitHandler = data => {
    console.log(data);
    this.setState({ name: data });
    // this.state.name(data);
    // const { contacts } = this.state;
    // const { name, number } = data;
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section>
          <Phonebook
            name={this.state.name}
            onSubmitData={this.formSubmitHandler}
          />
        </Section>
      </div>
    );
  }
}
