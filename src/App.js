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
