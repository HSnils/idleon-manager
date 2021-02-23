import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from '../router';
import store from './store';
import GlobalStyle from './global-style';
import Topbar from '../components/topbar';

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

  const theme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = (): void => {
    setDarkState(!darkState);
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    if (prefersDarkMode) {
      setDarkState(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  return (
    <ReduxProvider store={store}>
      <Fragment>
        <GlobalStyle darkMode={darkState} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar darkMode={darkState} handleThemeChange={handleThemeChange} />
          <Container maxWidth="lg">
            <Box my={4}>
              <Router />
            </Box>
          </Container>
        </ThemeProvider>
      </Fragment>
    </ReduxProvider>
  );
};

export default App;
