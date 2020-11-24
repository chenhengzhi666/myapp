export default {
  proxy: {
    '/yapi': {
      target: 'http://115.29.202.139:3000',
      changeOrigin: true,
      pathRewrite: { '^/yapi' : '' },
    },
    '/yqq': {
      target: 'https://c.y.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/yqq' : '' },
    }
  },
}