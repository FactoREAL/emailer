import * as React from 'react';
import { Pop } from 'react-preloading-component';

const WithLoading = (Component:any) => {
  return function WithLoading({ ...props }) {
    const { isLoading } = props;
    if (!isLoading) return (<Component {...props} />);
    return (<Component {...props} >
      <Pop />
    </Component>);
  };
};

export default WithLoading;
