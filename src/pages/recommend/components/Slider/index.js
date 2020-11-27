import React, { useEffect } from 'react';
import { connect } from 'umi';
import Carousel from '@/components/Carousel';
import { getSliderPayload as payload } from '@/utils/music/api';

const Slider = (props) => {
  const { dispatch, recommend: { sliderList = [] } } = props;

  // 获取推荐页面轮播图
  const getSlider = () => {
    dispatch({
      type: 'recommend/getSlider',
      payload,
    });
  };

  useEffect(() => {
    // 初始化时，若无轮播图数据时进行请求获取
    if (!sliderList.length) {
      getSlider();
    }
  }, []);

  return <Carousel data={sliderList} autoplay infinite autoplayInterval={8000} />;
};

export default connect(({ recommend }) => ({
  recommend,
}))(Slider);
