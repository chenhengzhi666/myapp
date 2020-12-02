import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import Header from '@/components/Header';
import { CSSTransition } from 'react-transition-group';
import styles from './index.less';

const Album = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const goBack = () => {
    setShow(false);
    setTimeout(() => {
      history.goBack();
    }, 295);
  };

  /**
   * CSSTransition进入动画结束时执行
   * @param {*动画对象} el
   */
  const onEntered = (el) => {
    // 初始为none，防止进入时闪烁情况，动画结束置为block
    el.style.display = 'block';
  };

  return (
    <CSSTransition appear in={show} timeout={300} classNames="album" onEntered={onEntered}>
      <div className={styles.root}>
        <Header title="河南郑州" goBack={goBack} />
      </div>
    </CSSTransition>
  );
};

export default Album;
