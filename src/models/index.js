export default {
  namespace: 'global',
  state: {
    globalColor: '',
  },
  effects: {},
  reducers: {
    'updata/state': (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  subscriptions: {},
};
