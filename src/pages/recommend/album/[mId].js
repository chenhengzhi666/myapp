import React, { useEffect, useState } from 'react';
import { history, connect, useParams } from 'umi';
import Header from '@/components/Header';
import Scroll from '@/components/Scroll';
import { CSSTransition } from 'react-transition-group';
import styles from './index.less';

const Album = (props) => {
  const { dispatch, recommend: { albumInfo } } = props;
  const { mId: albummid } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const payload = {
      albummid,
    };
    setShow(true);
    dispatch({
      type: 'recommend/albumInfo',
      payload,
    });
    return () => {
      dispatch({
        type: 'recommend/updata/state',
        payload: {
          albumInfo: {},
        },
      });
    };
  }, []);

  const goBack = () => {
    setShow(false);
    setTimeout(() => {
      history.goBack();
    }, 275);
  };

  return (
    <CSSTransition appear in={show} timeout={300} classNames="album">
      <div className={styles.root}>
        <Header title={albumInfo.name} goBack={goBack} />
        <div className={styles.poster}>
          <div className={styles.posterWrapper}>
            <img src={albumInfo.img} alt={albumInfo.name} />
          </div>
        </div>
        <Scroll refresh={albumInfo.songList?.length > 0} noHidden>
          <div className={styles.detail}>
            <div className={styles.albumSongList}>
              <p>专辑 共{albumInfo.songList?.length}首</p>
              <div className={styles.songList}>
                {albumInfo.songList?.map(song => (
                  <div className={styles.song} key={song.mId}>
                    <p className={styles.name}>{song.name}</p>
                    <p className={styles.singer}>{song.singer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Scroll>
      </div>
    </CSSTransition>
  );
};

export default connect(({ recommend }) => ({
  recommend,
}))(Album);
