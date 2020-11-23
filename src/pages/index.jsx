import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { get } from '@/utils/request';
import styles from './index.less';

export default () => {
  const [title, setTitle] = useState('Page Index');
  useEffect(() => {
    get('api/test/firstGet').then(res => {
      setTitle(res.text || 'error');
    });
  }, []);

  return (
    <div className={styles.root}>
      <Header title="Music" />
      <p>{title}</p>
    </div>
  );
};
