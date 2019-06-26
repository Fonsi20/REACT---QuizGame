import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from './pages/login';
import Home from './pages/question';
import score from './pages/score';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <LogIn />} />
            <Route exact path="/question" component={() => <Home />} />
            <Route path="/score" component={score} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
