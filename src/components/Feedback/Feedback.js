import React from 'react';
// import Controls from './Controls';

class Feedback extends React.Component {
  // ДЕФОЛТНОЕ значение ПРОПС
  static defaultProps = {
    initialValue: 5,
  };
  static propTypes = {
    //
  };

  // Передаем стартовое значение через ПРОПС, новый вариант через БАБЕЛЬ
  state = {
    value: this.props.initialValue,
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
    return <div></div>;
  }
}

export default Feedback;

{
  /* <div>
<span>{this.state.value}</span>
<Controls
  onIncrimente={this.handleIncrimente}
  onDecremente={this.handleDecremente}
/>
</div> */
}
