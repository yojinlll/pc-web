const port = process.env.port || process.env.npm_config_port || 8888; // dev port

const path = require('path');
function resolve(dir) {
  // 路径可能与你的项目不同
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `https://holiday-uat.marbleio.tech`,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: '',
      //   },
      // },
    // },
  },
  chainWebpack: config => {
    config.module.rule('svg').uses.clear();
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .include.add(resolve('src/svg'))
      .end();
  },
};
