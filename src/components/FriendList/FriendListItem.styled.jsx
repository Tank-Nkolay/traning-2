import styled from '@emotion/styled';

// функция определения цвета SPAN
const setColor = ({ status, theme }) => {
  switch (status) {
    case true:
      // color green ('rgb(6, 151, 6)')
      return theme.colors.green;
    // color red ('rgb(200, 19, 19)')
    case false:
      return theme.colors.red;
  }
};

export const Span = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 20px;
  background-color: ${setColor};
`;

export const Foto = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const TextName = styled.p`
  font-size: 30px;
`;
