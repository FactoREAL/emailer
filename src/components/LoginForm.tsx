import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { loginRequest } from 'src/actions/login';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loginRequest: bindActionCreators(loginRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  location? : any,
} & MappedDispatch;

type State = {
  login: string,
  password: string,
};

class LoginForm extends React.Component<Props, State> {
  state = {
    login: '',
    password: '',
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
    const { from } = this.props.location.state || { from: '/' };
    this.props.loginRequest(this.state.login, this.state.password, from);
  }

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
