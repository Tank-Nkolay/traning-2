import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';
// import Notification from '../Notification/Notification';
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

  //   передача данных во внешнее хранилище
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitData(this.state);

    // вызов reset
    this.reset();
  };

  //   функция очистки формы
  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
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
          {/* {this.countTotalFeedback() > '0' ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )} */}
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
