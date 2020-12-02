import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const Header = (props) => {
  const { title, goBack } = props;
  const clickBack = () => {
    if (goBack) {
      goBack();
    } else {
      history.goBack();
    }
  };

  return (
    <div className={styles.root}>
      <span className={styles.back} onClick={clickBack}>
        <i className="iconfont icon-back" />
      </span>
      <p>{title}</p>
    </div>
  );
};

export default Header;
