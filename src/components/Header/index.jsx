import React from 'react';
import { Tabs } from 'antd-mobile';
import logo from '@/assets/img/logo.png';
import styles from './index.less';

const tabs = [
  { title: '推荐', path: '11' },
  { title: '排行榜', path: '12' },
  { title: '歌手', path: '13' },
  { title: '搜索', path: '14' },
];

const tabStyle = {
  tabBarBackgroundColor: 'transparent',
  tabBarActiveTextColor: 'gold',
  tabBarUnderlineStyle: {
    borderColor: 'gold'
  }
};

const Header = props => {
  const tabChange = (tab) => {
    // eslint-disable-next-line no-console
    console.log(tab);
  };
  return (
    <div className={styles.root}>
      <header>
        <img src={logo} alt="music" />
        <h1 className={styles.title}>{props.title}</h1>
      </header>
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={tabChange}
        {...tabStyle}
      />
    </div>
  );
};

export default Header;
