import styled from '@emotion/styled';

export const BoxContacts = styled.ul`
  margin-top: ${props => props.theme.space[4]};
`;

export const Li = styled.li`
  margin-top: ${props => props.theme.space[4]};
  margin-left: ${props => props.theme.space[5]};
  list-style: disc;
  font-size: ${p => p.theme.fontSizes.mm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
