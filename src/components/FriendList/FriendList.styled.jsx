import styled from '@emotion/styled';

export const Markup = styled.ul``;

export const Card = styled.li`
  display: flex;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};

  margin-top: 20px;
  padding: 20px;
  align-items: center;

  &:last-child {
    margin-bottom: 50px;
  }
`;
