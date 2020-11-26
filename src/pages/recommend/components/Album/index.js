import React, { useEffect } from 'react';
import { connect } from 'umi';
import LayzLoad from 'react-lazyload';
import { getAlbumPayload as payload } from '@/utils/music/api';
import { createAlbum } from '@/utils/music/album';

import styles from './index.less';

const Album = (props) => {
  const { dispatch, recommend: { albumList = [] } } = props;
  const getAlbum = () => {
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
      <div className={styles.album} key={album.mId}>
        <div className={styles.img}>
          <LayzLoad>
            <img src={album.img} alt={album.name} />
          </LayzLoad>
        </div>
        <div className={styles.albumInfo}>
          <p className={styles.name}>{album.name}</p>
          <p className={styles.singer}>{album.singer}</p>
          <p className={styles.publicTime}>{album.publicTime}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.root}>
      <h1>最新专辑</h1>
      {renderAlbum()}
    </div>
  );
};

export default connect(({ recommend }) => ({
  recommend,
}))(Album);
