import React from 'react';
import loading from '@/assets/img/loading.gif';
import styles from './index.less';

const Loading = (props) => {
  const { status, title = 'loading...', zIndex = 999 } = props;
  return status ? (
    <div className={styles.root} style={{ zIndex }}>
      <img src={loading} alt="loading" />
      <p>{title}</p>
    </div>
  ) : null;
};

export default Loading;
