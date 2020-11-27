import React, { useState } from 'react';
import { history, useLocation } from 'umi';
import { Tabs } from 'antd-mobile';
import { menuList, currentPageIndex } from '@/utils/menu';
import logoImg from '@/assets/img/logo.png';
import styles from './index.less';

const Header = (props) => {
  const { logo, title } = props;
  const { pathname } = useLocation();
  const [page, setPage] = useState(currentPageIndex(pathname) || 0);

  const tabChange = ({ path }) => {
    history.push(path);
    setPage(currentPageIndex(path));
  };

  return (
    <div className={styles.root}>
      <header>
        {logo && <img src={logoImg} alt="music" />}
        {title && <h1 className={styles.title}>{title}</h1>}
      </header>
      <Tabs tabs={menuList} page={page} onChange={tabChange} tabBarBackgroundColor="transparent" />
    </div>
  );
};

export default Header;
