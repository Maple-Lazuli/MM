import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        // Purple and green play nicely together.
        main: '#FFFFFF',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Dashboard />
  </ThemeProvider>,


  document.getElementById('root')
);
