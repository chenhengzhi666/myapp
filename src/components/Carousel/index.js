import React, { useState } from 'react';
import { Carousel as Swiper } from 'antd-mobile';

const Carousel = (props) => {
  const { autoplay, infinite, afterChange = () => {}, data } = props;
  const [height, setHeight] = useState(166);
  return (
    <Swiper
      autoplay={autoplay}
      infinite={infinite}
      afterChange={afterChange}
    >
      {data.map(item => (
        <a
          key={item.id}
          href={item.linkUrl || '###'}
          style={{ display: 'inline-block', width: '100%', height }}
        >
          <img
            src={item.picUrl}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              setHeight('auto');
            }}
          />
        </a>
      ))}
    </Swiper>
  );
};

export default Carousel;
