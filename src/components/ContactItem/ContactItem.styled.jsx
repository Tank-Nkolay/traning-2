import styled from 'styled-components';

export const Li = styled.li`
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background-color: #f5f2f2;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #d8d6d6;
  }
`;
