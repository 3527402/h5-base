const { resolve } = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { defineConfig } = require('@vue/cli-service');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const { FileSystemIconLoader } = require('unplugin-icons/loaders');

// 本地服务的api代理
const devProxy = {};
[
  'service',
  'shopweb-check',
  'ovopark-privilege',
  'ovopark-organize',
  'weixin',
  'shopweb-support',
  'store-plan',
  'inspection-plan',
  'ovopark-device',
  'ovopark-wechat-message',
].forEach((item) => {
  devProxy[`/${item}/*`] = {
    changeOrigin: true,
    target: 'https://' + process.env.VUE_APP_DOMAIN,
  };
});

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  transpileDependencies: true,
  productionSourceMap: process.env.VUE_APP_MODE !== 'prod',
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve('../../core'),
        '@': resolve('./src'),
        '#': resolve('./types'),
      },
    },
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      pinia: 'Pinia',
      axios: 'axios',
      vant: 'vant',
    },
    plugins: [
      AutoImport({
        // vue 自动导入
        // 当 imports、hooks、store 新增/改变时，把下面的 eslintrc.enabled 改为 true，启动一次项目，自动生成 .eslintrc-auto-import.json，然后再把 eslintrc.enabled 改为 false
        imports: ['vue', 'vue-router', 'vue-i18n', 'pinia'],
        eslintrc: {
          enabled: false, // 默认false, true启用。生成一次就可以，避免每次项目启动都生成
          filepath: './.eslintrc-auto-import.json', // 生成json文件, eslintrc中引入
          globalsPropValue: true,
        },
        dirs: ['./src/hooks/**', '../../core/hooks/**', './src/store/**', '../../core/store'], // 自动导入全局hooks、store
      }),
      Components({
        dirs: ['./src/**/components', '../../core/components'], // 自动注册 components 目录下的 vue 组件
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: false,
            enabledCollections: ['svg', 'core-svg'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          svg: FileSystemIconLoader(resolve('./src/assets/svg')),
          'core-svg': FileSystemIconLoader(resolve('../../core/svg')),
        },
        scale: 1,
        defaultClass: 'wdz-svg',
      }),
    ],
  },
  chainWebpack: (config) => {
    // 打包体积分析
    if (process.env.webpack_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end();
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // 主题色变更
        additionalData: `@use 'core/style/var.scss' as *; @use 'core/style/mixins.scss' as *;`,
      },
    },
    // 打包production代码才提取css到单独文件，并配置忽略顺序警告。开发时不提取，否则css热更新失效
    extract: process.env.NODE_ENV === 'production' ? { ignoreOrder: true } : undefined,
  },
  devServer: {
    port: '9101',
    open: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    proxy: devProxy,
    client: {
      overlay: false,
    },
  },
});
