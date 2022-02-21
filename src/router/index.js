import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '../layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [{
      path: 'test',
      meta: {
        title: '测试'
      }
    }, {
      path: '/dashboard',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/dashboard')
    }]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
