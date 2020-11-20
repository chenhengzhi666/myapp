import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { get } from '@/utils/request';
import styles from './index.less';

export default () => {
  const [title, setTitle] = useState('Page Index');
  useEffect(() => {
    get('api/test/firstGet').then(res => {
      setTitle(res.text || 'error');
    })
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <Button type="primary">Aatd</Button>
    </div>
  );
}
