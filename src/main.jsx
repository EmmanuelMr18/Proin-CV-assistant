import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import AppRouter from './components/AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#023047'
    },
    secondary: {
      main: '#219EBC'
    }
  }
});
export const UserContext = React.createContext({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
