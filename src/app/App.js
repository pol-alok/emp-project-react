import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';
import Employees from '../pages/employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3C44B126',
    },
    secondary: {
      main: '#F83245',
      light: '#F8324526',
    },
    background: {
      default: '#F4F5FD',
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
    </ThemeProvider>
  );
}

export default App;
