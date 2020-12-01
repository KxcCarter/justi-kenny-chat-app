import React from 'react';

// MUI
import MainView from './components/MainView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// ***

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Paprika',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body2: {
      fontFamily: ['Raleway', 'sans-serif'].join(','),
    },
  },
  palette: {
    info: {
      main: '#BF895A',
    },
    background: {
      main: '#F2E3D5',
    },
  },
});

const App = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
