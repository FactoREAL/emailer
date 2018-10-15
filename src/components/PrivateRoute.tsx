import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  component: any,
  path: string,
};

const PrivateRoute: React.SFC<Props> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    const to = {
      pathname: '/login',
      state: { from: rest.path },
    };
    return <Redirect to={to}/>;
  }
  return <Route {...rest} render={(props: any) => <Component {...props} />}/>;
};

export default PrivateRoute;
