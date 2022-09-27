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
  };

  //   handleIncrimente = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value + 1,
  //     }));
  //   };

  //   handleDecremente = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value - 1,
  //     }));
  //   };

  render() {
    return (
      <Markup>
        <Title>Please leave feedback</Title>
        <BoxButton>
          <Button>good</Button>
          <Button>neutral</Button>
          <Button>bad</Button>
        </BoxButton>
        <Statistics>Statistics</Statistics>
        <BoxInfo>
          <Info>Good:</Info>
          <Info>Neutral:</Info>
          <Info>Bad:</Info>
        </BoxInfo>
      </Markup>
    );
  }
}

export default Feedback;
