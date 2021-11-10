import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';

import routes from './routes';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/GlobalStyles';
import ThemeToggler from './components/ThemeToggler';
import useDarkTheme from './hooks/useDarkTheme';

const App = () => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  console.log(isLogin);

  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <ThemeToggler themeToggler={themeToggler} />
        <p>Trying out light and dark themes! </p>
      </>
      <Router>
        {renderRoutes(routes)}
        {!isLogin && <Redirect to="/login" />}
      </Router>
    </ThemeProvider>
  );
};

export default App;
