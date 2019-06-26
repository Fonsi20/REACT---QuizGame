import React, { Component } from 'react';
import LogIn from './pages/login';
import Home from './pages/question';
import score from './pages/score';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={(history) => <LogIn props={this.props} />} />
            <Route exact path="/question" component={(history) =>
              <Home
                props={this.props}
                onIncrement={() => this.props.dispatch({ type: 'INCREMENT' })}
                onIncrementTrue={() => this.props.dispatch({ type: 'INCREMENTTRUE' })}
                onIncrementFalse={() => this.props.dispatch({ type: 'INCREMENTFALSE' })}
              />} />
            <Route path="/score" component={score} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;