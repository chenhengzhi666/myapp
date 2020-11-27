import React, { useState } from 'react';
import { PullToRefresh } from 'antd-mobile';
import { connect } from 'umi';
import { forceCheck } from 'react-lazyload';
import { getSliderPayload, getAlbumPayload } from '@/utils/music/api';
import Loading from '@/components/Loading';
import Scroll from '@/components/Scroll';
import Slider from './components/Slider';
import Album from './components/Album';
import styles from './index.less';

const Recommend = (props) => {
  const { loading: { global: loading }, dispatch } = props;
  const [pullToRefreshEnable, setPushToRefreshEnable] = useState(true); // 当bScroll滚动为正值时可执行下拉刷新事件
  const [refreshStatus, setRefreshStatus] = useState(false); // 当前下拉刷新是否进行

  const onScroll = (position) => {
    forceCheck();
    setPushToRefreshEnable(position.y > 0);
  };

  const onRefresh = () => {
    setRefreshStatus(true);
    Promise.all([
      dispatch({
        type: 'recommend/getSlider',
        payload: getSliderPayload,
      }),
      dispatch({
        type: 'recommend/updata/state',
        payload: getAlbumPayload,
      }),
    ]).then(() => {
      // 设置延时，防止过快，造成无刷新错觉
      setTimeout(() => {
        setRefreshStatus(false);
      }, 500);
    });
  };

  return (
    <div className={styles.root}>
      <Scroll refresh={loading} onScroll={onScroll}>
        <PullToRefresh
          refreshing={refreshStatus}
          distanceToRefresh={pullToRefreshEnable ? 25 : 99999}
          damping={30}
          onRefresh={() => {
            onRefresh();
          }}
        >
          <Slider />
          <Album />
        </PullToRefresh>
        {/* 下拉刷新时不使用loading组件 */}
        <Loading status={loading && !refreshStatus} title="正在加载..." />
      </Scroll>
    </div>
  );
};

export default connect(({ loading }) => ({
  loading,
}))(Recommend);
