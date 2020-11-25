import React from 'react';
import loading from '@/assets/img/loading.gif';
import styles from './index.less';

const Loading = (props) => {
  const { status, title = 'loading...' } = props;
  return status ? (
    <div className={styles.root}>
      <img src={loading} alt="loading" />
      <p>{title}</p>
    </div>
  ) : null;
};

export default Loading;
