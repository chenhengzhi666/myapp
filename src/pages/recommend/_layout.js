import React from 'react';
import Recommend from './_index';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Recommend />
      {children}
    </>
  );
};

export default Layout;
