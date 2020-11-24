import React, { useEffect } from 'react';
import { PullToRefresh } from 'antd-mobile';
import { get } from '@/utils/request';
import Slider from './components/Slider';

const Recommend = () => {
  useEffect(() => {
    get('yapi/mock/15/test/firstGet').then((res) => {
      console.log(res);
    });
  });

  return (
    <PullToRefresh
      onRefresh={() => {
        setTimeout(() => {
          console.log(1);
        }, 1000);
      }}
    >
      <div>
        <Slider />
      </div>
    </PullToRefresh>
  );
};

export default Recommend;
