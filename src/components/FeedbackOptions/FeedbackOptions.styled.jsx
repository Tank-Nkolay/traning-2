import styled from '@emotion/styled';

export const BoxButton = styled.div`
  margin-top: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[5]};
`;

export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${props => props.theme.space[3]};
  background-color: ${p => p.theme.colors.greyLight};

  padding: ${props => props.theme.space[3]};
  margin-right: ${props => props.theme.space[4]};
  &:last-child {
    margin-right: ${props => props.theme.space[0]};
  }
`;
