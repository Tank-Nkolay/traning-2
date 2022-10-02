import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Name from '../Name';

import {
  Markup,
  BoxPhonebook,
  Title,
  TitleContacts,
  Form,
  Label,
  Input,
  Button,
} from './Phonebook.styled.jsx';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  //   метод универсального ввода на две формы
  handleChange = e => {
    // таже функция но деструкторизировали
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // передача данных во внешнее хранилище
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitData(this.state);

    // вызов reset
    this.reset();
  };

  //   функция очистки формы
  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <Markup>
        <Title>Phonebook</Title>
        <Section title="">
          <BoxPhonebook>
            <Form onSubmit={this.handleSubmit}>
              <Label>
                Name
                <Input
                  name="name"
                  type="text"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Label>
              <Button type="submit">Add contacts</Button>
            </Form>
          </BoxPhonebook>
        </Section>

        <TitleContacts>Contacts</TitleContacts>
        <Section title="">
          <Name names={contacts} />
        </Section>
      </Markup>
    );
  }
}

export default Phonebook;

// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================

/* {this.countTotalFeedback() > '0' ? (
<Statistics
good={this.state.good}
neutral={this.state.neutral}
bad={this.state.bad}
total={this.countTotalFeedback()}
positivePercentage={this.countPositiveFeedbackPercentage()}
/>
) : (
<Notification message="There is no feedback" />
)} */
