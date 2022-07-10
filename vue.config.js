const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // devServer:{
  //   static:'./public',
  //   // overlay:{
  //   //   warnings: true,
  //   //   error: false
  //   // }
  // }
  devServer:{
    proxy:{
      '/api': {
        target: 'https://api.asian888.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        ws: true, //用于支持websocket
        // changeOrigin: true, //用于控制请求头中host值(为true时，其请求端口值和后台服务器一样（撒谎）;为false时，请求端口值和代理服务器端口一致(诚实))
      }
    }
  },
  lintOnSave: false,

  publicPath: './'
});
