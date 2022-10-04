import styled from '@emotion/styled';

export const BoxContacts = styled.ul``;

export const Li = styled.li`
  margin-top: ${props => props.theme.space[3]};
  margin-left: ${props => props.theme.space[6]};
  list-style: disc;
  font-size: ${p => p.theme.fontSizes.l};
`;
