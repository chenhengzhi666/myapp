import React, { useEffect } from 'react';
import { connect } from 'umi';
import { PARAM } from '@/utils/music/api';
import { createAlbum } from '@/utils/music/album';

import styles from './index.less';

const Album = (props) => {
  const { dispatch, recommend: { albumList = [] } } = props;
  const getAlbum = () => {
    const payload = {
      ...PARAM,
      g_tk: 1278911659,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0,
      data: `{"albumlib":
      {"method":"get_album_by_tags","param":
      {"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},
      "module":"music.web_album_library"}}`,
    };
    dispatch({
      type: 'recommend/getAlbum',
      payload,
    });
  };

  useEffect(() => {
    if (!albumList.length) {
      getAlbum();
    }
  }, []);

  const renderAlbum = () => albumList.map((item) => {
    const album = createAlbum(item);
    return (
      <div>{album.name}</div>
    );
  });

  return (
    <div className={styles.root}>
      <h1>最新专辑</h1>
      {/* {renderAlbum()} */}
    </div>
  );
};

export default connect(({ recommend }) => ({
  recommend,
}))(Album);
