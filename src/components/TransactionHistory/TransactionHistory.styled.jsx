import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 50px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  height: 40px;
  text-align: center;
  font-size: 24px;

  color: ${props => props.theme.colors.grayDark};
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Th = styled.th`
  border-radius: 6px 6px 0px 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 128px;
  padding-right: 128px;
  border-right: 2px solid ${props => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
  background-color: ${props => props.theme.colors.aque};
  color: ${props => props.theme.colors.white};
`;
