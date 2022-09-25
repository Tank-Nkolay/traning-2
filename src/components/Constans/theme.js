// вынесенные константы цветов можно применять на ПРОПС
export const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: 'rgb(6, 151, 6)',
    gray: '#aaa',
    grayLight: 'rgb(217, 212, 212)',
    grayDark: 'rgb(118, 115, 115)',

    red: 'rgb(200, 19, 19)',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
