import { defineConfig } from 'umi';

export default defineConfig({
  // base: '/docs/',
  publicPath: './',
  hash: true,
  history: {
    type: 'hash',
  },
  antd: {},
  proxy: {
    '/api': {
      target: 'http://115.29.202.139:3000/mock/14',
      changeOrigin: true,
      pathRewrite: { '^/api' : '' },
    },
  },
});
