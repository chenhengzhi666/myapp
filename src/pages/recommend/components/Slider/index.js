import React, { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import { get } from '@/utils/request';
import { PARAM } from '@/utils/yqq/api';

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const getSlider = () => {
    const payload = {
      ...PARAM,
      g_tk: 701075963,
      uin: 0,
      platform: 'h5',
      needNewCode: 1,
      _: new Date().getTime(),
    };
    get('yqq/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', payload).then((res) => {
      if (res.code === 0) {
        setSlider(res.data?.slider);
      }
    });
  };

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <div>
      <Carousel data={slider} autoplay infinite />
    </div>
  );
};

export default Slider;
