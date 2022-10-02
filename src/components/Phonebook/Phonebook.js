import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
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
  // Передаем стартовое значение ===
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrimenteGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrimenteNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrimenteBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  // {this.state.visible ? 'Скрыть' : 'Показать'}
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
          {this.countTotalFeedback() > '0' ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Markup>
    );
  }
}

export default Phonebook;

// ===================================
// countPositiveFeedbackPercentage() {
//   return parseInt((this.state.good / this.countTotalFeedback()) * 100);
// }
// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
