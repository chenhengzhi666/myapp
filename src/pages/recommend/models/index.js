import { createAlbumInfo } from '@/utils/music/album';
import { getSlider, getAlbum, albumInfo } from '../services/index';

export default {
  namespace: 'recommend',
  state: {
    sliderList: [],
    albumList: [],
    albumInfo: {},
    refreshScroll: false,
  },
  effects: {
    *getSlider({ payload }, { call, put }) {
      const res = yield call(getSlider, payload);
      if (res.code === 0) {
        yield put({
          type: 'updata/state',
          payload: {
            sliderList: res.data?.slider,
          },
        });
      }
    },
    *getAlbum({ payload }, { call, put }) {
      const res = yield call(getAlbum, payload);
      if (res.code === 0) {
        yield put({
          type: 'updata/state',
          payload: {
            albumList: res.albumlib?.data?.list,
          },
        });
        // 专辑数据生成后，刷新BScroll
        yield put({
          type: 'updata/state',
          payload: {
            refreshScroll: true,
          },
        });
      }
    },
    *albumInfo({ payload }, { call, put }) {
      const res = yield call(albumInfo, payload);
      if (res.code === 0) {
        yield put({
          type: 'updata/state',
          payload: {
            albumInfo: createAlbumInfo(res.data),
          },
        });
      }
    },
  },
  reducers: {
    'updata/state': (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  subscriptions: {},
};
