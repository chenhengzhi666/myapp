import React, { useRef, useEffect, useState } from 'react';
import BScroll from 'better-scroll';
import { CSSTransition } from 'react-transition-group';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import styles from './index.less';

const Scroll = (props) => {
  const { children, refresh, onScroll, backTop } = props;
  const [scroll, setScroll] = useState();
  const [backToEnable, setBackTopEnable] = useState(false);
  const scrollRef = useRef();
  useEffect(() => {
    if (!scroll) {
      const scrollView = scrollRef.current;
      const newScroll = new BScroll(scrollView, {
        // 实时派发scroll事件
        probeType: 3,
        click: true,
      });
      
      // 执行滚动事件
      newScroll.on('scroll', (position) => {
        if (onScroll) onScroll(position);
        setBackTopEnable(position.y < -300);
      });

      setScroll(newScroll);
    } else if (refresh) scroll.refresh();

    return () => {
      // 解绑scroll事件
      if (scroll) {
        setScroll(null);
        scroll.off('scroll');
        scroll.destroy();
      }
    };
  }, [refresh]);

  // 返回顶部
  const BackToTop = () => {
    scroll.scrollTo(0, 0, 300);
  };

  return (
    <div className={styles.root} ref={scrollRef}>
      {children}
      {backTop && (
      <CSSTransition in={backToEnable} timeout={300} classNames="backtop">
        <div className={styles.backTop} onClick={BackToTop}>
          <VerticalAlignTopOutlined />
        </div>
      </CSSTransition>
      )}
    </div>
  );
};

export default Scroll;
