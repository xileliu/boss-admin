const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: 'index',
        name: '首页99999',
        icon: 'home',
        component: './index',
      },
    ],
  },
];

export default routes;
