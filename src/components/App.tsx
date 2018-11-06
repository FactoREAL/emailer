import * as React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Emailer from './Emailer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Confirm from 'src/components/Confirm';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <PrivateRoute path="/folders" component={Emailer}/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/registration" component={RegisterForm}/>
            <Route path="/confirm" component={Confirm}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
