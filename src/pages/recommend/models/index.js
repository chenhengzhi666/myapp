import { getSlider, getAlbum } from '../services/index';

export default {
  namespace: 'recommend',
  state: {
    sliderList: [],
    albumList: [],
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
  },
  reducers: {
    'updata/state': (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  subscriptions: {},
};
