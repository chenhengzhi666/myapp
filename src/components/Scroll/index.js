import React, { useRef, useEffect, useState } from 'react';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import styles from './index.less';

const Scroll = (props) => {
  const { children, refresh, onScroll } = props;
  const [scroll, setScroll] = useState();
  const scrollRef = useRef();
  useEffect(() => {
    if (!scroll) {
      const scrollView = scrollRef.current;
      const newScroll = new BScroll(scrollView, {
        // 实时派发scroll事件
        probeType: 3,
        click: true,
      });
      
      if (onScroll) {
        // 执行滚动事件
        newScroll.on('scroll', (position) => {
          onScroll(position);
        });
      }

      setScroll(newScroll);
    } else if (refresh) scroll.refresh();

    return () => {
      // 解绑scroll事件
      if (onScroll && scroll) scroll.off('scroll');
      setScroll(null);
    };
  }, [refresh]);

  return (
    <div className={styles.root} ref={scrollRef}>
      {children}
    </div>
  );
};

Scroll.propTypes = {
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
};

export default Scroll;
