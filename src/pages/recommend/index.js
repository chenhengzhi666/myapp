import React, { useEffect } from 'react';
import { PullToRefresh } from 'antd-mobile';
import { connect } from 'umi';
import { get } from '@/utils/request';
import Loading from '@/components/Loading';
import Slider from './components/Slider';
import Album from './components/Album';
import styles from './index.less';

const Recommend = (props) => {
  const { loading: { global: loading } } = props;
  useEffect(() => {
    get('yapi/mock/15/test/firstGet').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <PullToRefresh
      onRefresh={() => {
        setTimeout(() => {
          console.log(1);
        }, 1000);
      }}
      className={styles.root}
    >
      <Slider />
      <Album />
      <Loading status={loading} title="正在加载..." />
    </PullToRefresh>
  );
};

export default connect(({ loading }) => ({
  loading,
}))(Recommend);
