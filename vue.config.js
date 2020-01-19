const path = require('path')

function resolve(dir){
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : './',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      // 别名
      alias: {
        '@': resolve('src'),
        components: resolve('src/components'),
        views: resolve('src/views'),
        utils: resolve('src/utils'),
        consts: resolve('src/consts')
      }
    },
    // devServer: {
    //   proxy: {
    //     '/post': {
    //         target: 'https://www.url.net',
    //         changeOrigin: true,
    //         pathRewrite: {
    //           '^/post': '/',
    //         },
    //     }
    //   }
    // }
  }
}