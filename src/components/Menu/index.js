import React, { useState, useEffect, useRef } from 'react';
import { history, useLocation, useDispatch } from 'umi';
import { Tabs } from 'antd-mobile';
import { menuList, currentPageIndex } from '@/utils/menu';
import logoImg from '@/assets/img/logo.png';
import styles from './index.less';

const Header = (props) => {
  const { logo, title } = props;
  const titleRef = useRef();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [page, setPage] = useState(currentPageIndex(pathname) || 0);

  const tabChange = ({ path }) => {
    history.push(path);
    setPage(currentPageIndex(path));
  };

  useEffect(() => {
    const globalColor = window.getComputedStyle(titleRef.current, null)?.color;
    dispatch({
      type: 'global/updata/state',
      payload: {
        globalColor,
      },
    });
  }, []);

  return (
    <div className={styles.root}>
      <header>
        {logo && <img src={logoImg} alt="music" />}
        {title && <h1 ref={titleRef} className={styles.title}>{title}</h1>}
      </header>
      <Tabs tabs={menuList} page={page} onChange={tabChange} tabBarBackgroundColor="transparent" />
    </div>
  );
};

export default Header;
