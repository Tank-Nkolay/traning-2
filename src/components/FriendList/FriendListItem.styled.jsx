import styled from '@emotion/styled';

// функция определения цвета SPAN
const setColor = ({ status }) => {
  switch (status) {
    case true:
      // color green
      return 'rgb(6, 151, 6)';
    // color red
    case false:
      return 'rgb(200, 19, 19)';
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
