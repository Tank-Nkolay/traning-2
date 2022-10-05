import styled from '@emotion/styled';

export const ErrorText = styled.div``;

export const BoxFormInput = styled.div`
  border: 2px solid;
  margin-top: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[5]};
  padding: ${props => props.theme.space[4]};
`;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.mm};
`;

// export const Input = styled.input`
//   margin-top: ${props => props.theme.space[2]};
//   margin-bottom: ${props => props.theme.space[4]};
//   font-size: ${p => p.theme.fontSizes.m};
//   padding: ${props => props.theme.space[2]};
// `;

export const Button = styled.button`
  width: 120px;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
`;
