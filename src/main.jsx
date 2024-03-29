import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import AppRouter from './components/AppRouter';
import { theme } from './styles/theme';
import './i18n/i18n';
export const UserContext = React.createContext({ data: {} });

let container = null;
document.addEventListener('DOMContentLoaded', function () {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
});
