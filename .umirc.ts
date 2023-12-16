import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: {},
  layout: {
    title: 'AI-Diary',
  },
  routes: [
    {
      path: '/',
      redirect: '/blog/home',
    },
    {
      name: 'Diary List',
      path: '/blog/home',
      component: './Home',
    },
    {
      name: 'New Diary',
      path: '/blog/new',
      component: './New',
    },
    {
      name: 'Detail',
      path: '/blog/:id',
      component: './Detail',
      hideInMenu: true,
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

