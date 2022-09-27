import React from 'react';
// import Controls from './Controls';

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
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button>good</button>
          <button>neutral</button>
          <button>bad</button>
        </div>
        <h3>Statistic</h3>
        <div>
          <p>Good:</p>
          <p>Neutral:</p>
          <p>Bad:</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
