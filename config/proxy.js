export default {
  proxy: {
    '/yapi': {
      target: 'http://115.29.202.139:3000',
      changeOrigin: true,
      pathRewrite: { '^/yapi' : '' },
    },
    '/yqq': {
      target: 'http://183.192.170.186',
      changeOrigin: true,
      pathRewrite: { '^/yqq' : '' },
    },
    '/uyqq': {
      target: 'https://u.y.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/uyqq' : '' },
    }
  },
}