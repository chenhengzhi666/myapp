import React, { useEffect, useState, useRef } from 'react';
import { history, connect, useParams } from 'umi';
import Header from '@/components/Header';
import Scroll from '@/components/Scroll';
import { CSSTransition } from 'react-transition-group';
import styles from './index.less';

const Album = (props) => {
  const { dispatch, recommend: { albumInfo } } = props;
  const { mId: albummid } = useParams(); // 专辑mId
  const [show, setShow] = useState(false); // 专辑详情动画执行标志
  const posterRef = useRef(); // 海报区域
  const posterFixedRef = useRef(); // 海报头部固定区域
  const scrollRef = useRef(); // 滚动区域
  const playAllRef = useRef(); // 播放全部按钮
  const songList = albumInfo.songList?.length; // 专辑歌曲列表长度

  useEffect(() => {
    const payload = {
      albummid,
    };
    setShow(true);
    // 设置滚动区域距顶部高度
    scrollRef.current.style.top = `${posterRef.current?.offsetHeight || 0}px`;
    dispatch({
      type: 'recommend/albumInfo',
      payload,
    });
    return () => {
      // 退出时清空专辑详情信息
      dispatch({
        type: 'recommend/updata/state',
        payload: {
          albumInfo: {},
        },
      });
    };
  }, []);

  // 返回时执行,等待动画执行后返回
  const goBack = () => {
    setShow(false);
    setTimeout(() => {
      history.goBack();
    }, 275);
  };

  // scroll滚动时
  const onScroll = ({ y }) => {
    if (y > 0) {
      // 向下滚动时头部固定海报消失
      posterFixedRef.current.style.display = 'none';
      // 海报动画部分
      const transform = `scale(${1 + y * 0.003}, ${1 + y * 0.003})`;
      posterRef.current.style.webkitTransform = transform;
      posterRef.current.style.transform = transform;
      playAllRef.current.style.bottom = `${20 - y * 2 / 5}px`;
    } else {
      // 向上滚动时头部固定海报展示
      posterFixedRef.current.style.display = 'block';
    }
  };

  return (
    <CSSTransition appear in={show} timeout={300} classNames="album">
      <div className={styles.root}>
        <Header title={albumInfo.name} goBack={goBack} />
        <div className={styles.poster}>
          <div className={styles.posterFixedWrapper} ref={posterFixedRef}>
            <img className={styles.fixedImg} src={albumInfo.img} alt={albumInfo.name} />
          </div>
          <div className={styles.posterWrapper} ref={posterRef}>
            <img src={albumInfo.img} alt={albumInfo.name} />
          </div>
          {songList > 0 && albumInfo.img && (
            <div className={styles.palyAll} ref={playAllRef}>
              <i className="iconfont icon-play" />
              <span>播放全部</span>
            </div>
          )}
        </div>
        <div className={styles.scroll} ref={scrollRef}>
          {songList && (
            <Scroll refresh={songList > 0} noHidden onScroll={onScroll}>
              <div className={styles.detail}>
                <div className={styles.albumSongList}>
                  <p>专辑 共{songList}首</p>
                  <div className={styles.songList}>
                    {albumInfo.songList?.map(song => (
                      <div className={styles.song} key={song.mId}>
                        <p className={styles.name}>{song.name}</p>
                        <p className={styles.singer}>{song.singer}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {albumInfo.desc && (
                <div className={styles.desc}>
                  <h1>专辑简介</h1>
                  <p>{albumInfo.desc}</p>
                </div>
                )}
              </div>
            </Scroll>
          )}
        </div>
        
      </div>
    </CSSTransition>
  );
};

export default connect(({ recommend }) => ({
  recommend,
}))(Album);
