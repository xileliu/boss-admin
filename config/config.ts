import path from 'path';
import pageRoutes from './router.config';

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: { webpackChunkName: true },
      title: '【新版】云账户·综合服务平台',
      // dll: true, // 影响 Icon 的热更新

      routes: {
        exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//],
      },
    },
  ],
];

const config = {
  treeShaking: true,
  plugins,
  extraBabelPlugins: [['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }]],
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },

  targets: {
    ie: 11,
  },
  // 路由配置
  routes: pageRoutes,
  alias: {
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/icons.ts'),
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  manifest: {
    basePath: '/',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:8082',
    },
  },
};

export default config;
