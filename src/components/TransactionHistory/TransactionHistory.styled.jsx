import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 50px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  text-align: center;
  font-size: 24px;

  //   &:first-child {
  //     background-color: ${props => props.theme.colors.red};
  //   }
  &:nth-child(2n) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Th = styled.th`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 128px;
  padding-right: 128px;
  border-right: 2px solid ${props => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;
