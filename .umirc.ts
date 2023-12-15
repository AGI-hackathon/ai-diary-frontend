import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: {
    '/diary': {
      'target': 'https://gg3mbenk6m.ap-northeast-1.awsapprunner.com/',
      'changeOrigin': true
    },
  },
  layout: {
    title: 'AI-Diary',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Diary',
      path: '/home',
      component: './Home',
    },
    {
      name: 'New Diary',
      path: '/new',
      component: './New',
    },
    {
      name: 'Detail',
      path: '/detail/:id',
      component: './Detail',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
  ],
  npmClient: 'pnpm',
});

