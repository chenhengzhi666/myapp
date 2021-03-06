
import theme from './theme';
import proxy from './proxy';

export default {
  theme,
  ...proxy,
  // base: '/docs/',
  publicPath: './',
  hash: true,
  history: {
    type: 'hash',
  },
  favicon: './logo.png',
  title: 'Music',
  antd: {},
  cssLoader: {
    localsConvention: 'camelCase'
  },
  dva: {
    immer: true,
    hmr: false,
  },
};
