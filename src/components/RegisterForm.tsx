import * as React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { registration } from 'src/api/login';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    registration: bindActionCreators(registration, dispatch),
  };
}

type Params = {
  registration: (data: object) => void,
};

type State = {
  login: string,
  email: string,
  password: string,
  confirmPassword: string,
};

class RegisterForm extends React.Component<Params, State> {
  state = {
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  render() {
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
            <label htmlFor="email">email</label>
            <input
              className="form-control"
              id="email"
              type="text"
              name="email"
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="pass">Пароль</label>
            <input
              className="form-control"
              id="pass"
              type="text"
              name="password"
              onChange={this.handleChangePassword}
            />
            <label htmlFor="passconfirm">Повторите пароль</label>
            <input
              className="form-control"
              id="passconfirm"
              type="text"
              name="passconfirm"
              onChange={this.handleChangePasswordConfirm}
            />
            <button
              className="btn btn-primary mt-2"
              onClick={this.handleSubmit}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        <Link className="float-right" to="/">Вход</Link>
      </div>
    </div>;
  }

  handleChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      login: e.currentTarget.value,
    });
  }
  handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      email: e.currentTarget.value,
    });
  }
  handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      password: e.currentTarget.value,
    });
  }
  handleChangePasswordConfirm = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      confirmPassword: e.currentTarget.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const authData = {
      name: this.state.login,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword,
    };
    this.props.registration(authData);
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm);
