import * as React from 'react';
import axios from 'axios';
import { setToken } from 'src/actions/token';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { Link, Redirect } from 'react-router-dom';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setToken: bindActionCreators(setToken, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  location? : any,
} & MappedDispatch;

type State = {
  login: string,
  password: string,
  redirect: boolean,
};

class LoginForm extends React.Component<Props, State> {
  state = {
    login: '',
    password: '',
    redirect: false,
  };

  handleChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      login: e.currentTarget.value,
    });
  }
  handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      password: e.currentTarget.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({
      login: '',
      password: '',
    });
    const body = {
      email: this.state.login,
      password: this.state.password,
    };
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.post('https://dev.emailer-electron-laravel.cronix.life/api/v1/login', body, options)
      .then((res: any) => {
        this.props.setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        console.log('token set!');
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: '/' };
    if (this.state.redirect) {
      return <Redirect to={from} />;
    }
    return <div className="row justify-content-center">
      <div className="col-3 container bg-light">
        <form>
          <div className="form-group">
            <label htmlFor="login">Логин</label>
            <input
              className="form-control"
              id="login"
              type="text"
              name="login"
              onChange={this.handleChangeLogin}
            />
            <label htmlFor="pass">Пароль</label>
            <input
              className="form-control"
              id="pass"
              type="text"
              name="password"
              onChange={this.handleChangePassword}
            />
            <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>Вход</button>
          </div>
        </form>
        <Link className="float-right" to="/registration">регистрация</Link>
      </div>;
    </div>;
  }
}

export default compose(
  connect(null, mapDispatchToProps),
)(LoginForm);
