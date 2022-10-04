import React from 'react';
import { Formik } from 'formik';
// import PropTypes from 'prop-types';

import {
  BoxFormInput,
  Form,
  Label,
  Input,
  Button,
} from './ContactsForm.styled';

class ContactsForm extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  //   метод универсального ввода на две формы
  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({
      [name]: value,
      [number]: value,
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
    this.setState({ number: '' });
  };

  render() {
    return (
      <BoxFormInput>
        <Formik>
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
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
              />
            </Label>
            <Button type="submit">Add contacts</Button>
          </Form>
        </Formik>
      </BoxFormInput>
    );
  }
}

export default ContactsForm;

// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
