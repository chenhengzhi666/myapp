import React, { useState } from 'react';
import { useHistory, useLocation } from 'umi';
import { Tabs } from 'antd-mobile';
import { menuList, currentPageIndex } from '@/utils/menu';
import logo from '@/assets/img/logo.png';
import styles from './index.less';

const Header = (props) => {
  const { logoStatus = true, title } = props;
  const history = useHistory();
  const { pathname } = useLocation();
  const [page, setPage] = useState(currentPageIndex(pathname) || 0);

  const tabChange = ({ path }) => {
    history.push(path);
    setPage(currentPageIndex(path));
  };

  return (
    <div className={styles.root}>
      <header>
        {logoStatus && <img src={logo} alt="music" />}
        <h1 className={styles.title}>{title}</h1>
      </header>
      <Tabs tabs={menuList} page={page} onChange={tabChange} tabBarBackgroundColor="transparent" />
    </div>
  );
};

export default Header;
