const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: 'index',
        name: '首页',
        icon: 'home',
        component: './index',
      },
    ],
  },
];

export default routes;
