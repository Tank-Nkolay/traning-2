import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup';
// import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';
import {
  ErrorText,
  BoxFormInput,
  // Form,
  Label,
  // Input,
  Button,
} from './ContactsForm.styled';

// ========================================================================
// ВАРИАНТ c FORMIK
// ========================================================================

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('This field is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <ErrorText>{message}</ErrorText>;
      }}
    />
  );
};

function ContactsForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  // console.log(onSubmit);
  return (
    <BoxFormInput>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Label>
            Name
            <Field
              className={css.field}
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Enter name"
            />
            <FormError className={css.formError} name="name" />
          </Label>
          <Label>
            Number
            <Field
              className={css.field}
              type="tel"
              name="number"
              autoComplete="off"
              placeholder="Enter phone"
            />
            <FormError className={css.formError} name="number" />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Formik>
    </BoxFormInput>
  );
}

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactsForm;

// ========================================================================
// ВАРИАНТ БЕЗ FORMIK
// ========================================================================

// class ContactsForm extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   //   метод универсального ввода на две формы
//   handleChange = e => {
//     const { name, number, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//       [number]: value,
//     });
//   };

//   // передача данных во внешнее хранилище
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     // вызов reset
//     this.reset();
//   };

//   //   функция очистки формы
//   reset = () => {
//     this.setState({ name: '' });
//     this.setState({ number: '' });
//   };

//   render() {
//     return (
//       <BoxFormInput>
//         {/* <Formik> */}
//         <Form onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               name="name"
//               type="text"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             Number
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </Label>
//           <Button type="submit">Add contacts</Button>
//         </Form>
//         {/* </Formik> */}
//       </BoxFormInput>
//     );
//   }
// }

// export default ContactsForm;

// ===================================
// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
