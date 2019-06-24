import React, { Component } from 'react';
import LogIn from './pages/login';
import home from './pages/home';
import score from './pages/score';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={(history) => <LogIn />} />
            <Route path="/home" component={home} />
            <Route path="/score" component={score} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;