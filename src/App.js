import React from 'react';

// MUI
import MainView from './components/MainView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// ***

const headingFontFamily = [
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
].join(',');

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),

    button: {
      textTransform: 'lowercase',
    },
    h1: { fontFamily: headingFontFamily },
    h2: { fontFamily: headingFontFamily },
    h3: { fontFamily: headingFontFamily },
    h4: { fontFamily: headingFontFamily },
    h5: { fontFamily: headingFontFamily },
    h6: { fontFamily: headingFontFamily },
    subtitle1: {
      fontFamily: headingFontFamily,
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '12px',
    },
  },
  palette: {
    primary: {
      main: '#89B0C9',
    },
    info: {
      main: '#BF895A',
      light: '#D9AE89',
    },
    secondary: {
      main: '#261A23',
      contrastText: '#D9C7B8',
    },
    background: {
      main: '#594659',
      secondary: '#D9C5AD',
    },
    text: {
      secondary: '#8C634A',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  );
};

export default App;
