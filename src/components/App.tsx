import * as React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Emailer from './Emailer';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Confirm from 'src/components/Confirm';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Switch>
            <PrivateRoute path="/folders" component={Emailer}/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/registration" component={RegisterForm}/>
            <Route path="/confirm" component={Confirm}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
