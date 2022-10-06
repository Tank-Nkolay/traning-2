import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          padding-top: 50px;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Comic Sans MS',
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: rgba(150, 157, 151, 0.2);
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        ul,
        p {
          margin: 0;
          padding: 0;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        img {
          display: block;
          height: auto;
          max-width: 100%;
        }
        button {
          outline: none;
        }
        button:hover {
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyles;
