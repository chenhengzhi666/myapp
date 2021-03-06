import React from 'react';
import Header from '@/components/Menu';

/**
 * 全局layout
 * @param {*props} props
 */

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header title="Music" />
      {children}
    </>
  );
};

export default Layout;
