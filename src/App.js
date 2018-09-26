import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import green from '@material-ui/core/colors/green';

/* Views */
import Scenarios from './components/Scenarios';
import Plans from './components/Plans';
import Reports from './components/Reports';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[500],
      main: green[800],
      dark: grey[900],
      contrastText: '#fff',
    },
    secondary: {
      light: deepOrange[200],
      main: deepOrange['A400'],
      dark: grey[600],
      contrastText: '#000',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path='/plans' component={Plans} />
              <Route exact path='/reports' component={Reports} />
              <Route path='/' component={Scenarios} />
            </Switch>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
