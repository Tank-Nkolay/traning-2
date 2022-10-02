import React from 'react';
// import PropTypes from 'prop-types';

import { BoxFormInput, Form, Label, Input, Button } from './FormInput.styled';

class FormInput extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  //   метод универсального ввода на две формы
  handleChange = e => {
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
    return (
      <BoxFormInput>
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
      </BoxFormInput>
    );
  }
}

export default FormInput;

// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
