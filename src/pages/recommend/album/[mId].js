import React, { useEffect, useState } from 'react';
import { history, connect, useParams } from 'umi';
import Header from '@/components/Header';
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
      </div>
    </CSSTransition>
  );
};

export default connect(({ recommend }) => ({
  recommend,
}))(Album);
