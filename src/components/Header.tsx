import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState } from 'src/reducers/rootReducer';
import { bindActionCreators, Dispatch } from 'redux';
import { setToken } from 'src/actions/login';

function mapStateToProps(state: IRootState) {
  return {
    token: state.token,
  };
}
type MappedState = ReturnType<typeof mapStateToProps>;

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setToken: bindActionCreators(setToken, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {}
  & MappedState
  & MappedDispatch;

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
          <Link className="nav-item nav-link" to={'/'}>Домой</Link>
          <Link className="nav-item nav-link" to={'/folders'}>Папки</Link>
        </div>
        <div className="navbar-nav ml-auto">
          {auth}
        </div>
      </div>
    );
  }

  logout = () => {
    this.props.setToken('');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
