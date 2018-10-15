import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IRootState } from 'src/types';
import { connect } from 'react-redux';

function mapStateToProps(state: IRootState) {
  return {
    token: state.token,
  };
}

type Props = {
  token: string,
};

class Header extends React.Component<Props> {
  render() {
    const isAuth = this.props.token || localStorage.getItem('token');
    const auth  = (isAuth)
      ? <Link to="/" onClick={this.logout}>
        <button className="btn btn-outline-secondary">Выход</button>
      </Link>
      : <Link to="/login">
        <button className="btn btn-outline-secondary">Вход</button>
      </Link>;
    return (
      <div className="navbar navbar-expand navbar-dark bg-dark mb-3">
        <div className=" navbar-nav">
          <NavLink className="nav-item nav-link" to={'/'}>Домой</NavLink>
          <NavLink className="nav-item nav-link" to={'/folders'}>Папки</NavLink>
        </div>
        <div className="navbar-nav ml-auto">
          {auth}
        </div>
      </div>
    );
  }

  logout = () => {
    localStorage.setItem('token', '');
    this.setState({
      auth: '',
    });
  }
}

export default connect(mapStateToProps)(Header);
