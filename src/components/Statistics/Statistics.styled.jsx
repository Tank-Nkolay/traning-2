import styled from '@emotion/styled';

export const BoxInfo = styled.div``;

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${props => props.theme.space[3]};
  &:last-child {
    margin-bottom: ${props => props.theme.space[0]};
  }
`;
