import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormBook = styled(Form)`
  border: 1px solid;
  margin-top: 20px;
  padding: 20px 10px;
  font-size: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 5px 10px 5px 10px;
`;

export const Btn = styled.button`
  margin: 0px;
  padding: 5px 10px 5px 10px;
  width: 128px;
  cursor: pointer;

  background-color: #f5f2f2;

  &:hover,
  &:focus {
    background-color: #d8d6d6;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  position: absolute;
  margin-top: 70px;
  font-size: 16px;
  width: 450px;
`;
