import React from 'react';
import ReactDOM from 'react-dom/client';
// обязательно для ШАБЛОНЫ и потом обертка ThemeProvider
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import AuthProvider from './components/Hooks/Context/AuthProvider';
import './index.css';
// импорт константы цветов и потом обертка (доступно на ПРОПС)
import { theme } from './Constans/theme';
// import HooksContext from './components/HooksSecond/Context/HooksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
