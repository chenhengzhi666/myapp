import React from 'react';
import Header from '@/components/Header';

/**
 * 全局layout
 * @param {*props} props
 */

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header logoStatus={false} title="Music" />
      {children}
    </>
  );
};

export default Layout;
