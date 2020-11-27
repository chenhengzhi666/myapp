import React, { useState } from 'react';
import { Carousel as Swiper } from 'antd-mobile';

const Carousel = (props) => {
  const {
    autoplay = false,
    infinite = false,
    dots = true,
    height = 'auto',
    autoplayInterval = 3000,
    afterChange = () => {},
    data,
  } = props;
  const [autoPlay, setAutoPlay] = useState(false);
  return (
    <Swiper
      autoplay={autoPlay}
      infinite={infinite}
      dots={dots}
      autoplayInterval={autoplayInterval}
      afterChange={afterChange}
      style={{ height }}
      dotStyle={{
        width: 6,
        height: 6,
      }}
      dotActiveStyle={{
        width: 30,
        height: 6,
        borderRadius: 8,
        color: '#cccccc',
      }}
    >
      {data.map(item => (
        <a
          key={item.id}
          href={item.linkUrl || '###'}
          style={{ display: 'inline-block', width: '100%', height: '100%' }}
        >
          <img
            src={item.picUrl}
            alt=""
            style={{ width: '100%', verticalAlign: 'top', height }}
            onLoad={() => {
              // 图片加载后需重新设置轮播图自动播放状态
              setAutoPlay(autoplay);
            }}
          />
        </a>
      ))}
    </Swiper>
  );
};

export default Carousel;
