import { createAlbumInfo } from '@/utils/music/album';
import { getSlider, getAlbum, albumInfo } from '../services/index';

export default {
  namespace: 'recommend',
  state: {
    sliderList: [],
    albumList: [],
    albumInfo: {},
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
