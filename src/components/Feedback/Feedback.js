import React from 'react';
// import PropTypes from 'prop-types';
import {
  Markup,
  Title,
  BoxButton,
  Button,
  Statistics,
  BoxInfo,
  Info,
} from './Feedback.styled.jsx';

class Feedback extends React.Component {
  // ДЕФОЛТНОЕ значение ПРОПС
  //   static defaultProps = {
  //     initialValue: 5,
  //   };
  static propTypes = {
    //
  };

  // Передаем стартовое значение через ПРОПС, новый вариант через БАБЕЛЬ
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
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
  // ===================================
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: this.good + this.neutral + this.bad,
    }));
    // ===================================
  };

  render() {
    return (
      <Markup>
        <Title>Please leave feedback</Title>
        <BoxButton>
          <Button onClick={this.handleIncrimenteGood}>good</Button>
          <Button onClick={this.handleIncrimenteNeutral}>neutral</Button>
          <Button onClick={this.handleIncrimenteBad}>bad</Button>
        </BoxButton>
        <Statistics>Statistics</Statistics>
        <BoxInfo>
          <Info>Good: {this.state.good}</Info>
          <Info>Neutral: {this.state.neutral}</Info>
          <Info>Bad: {this.state.bad}</Info>
          <Info>Total: {this.state.total}</Info>
          <Info>Positive feedback: {this.total}</Info>
        </BoxInfo>
      </Markup>
    );
  }
}

export default Feedback;
