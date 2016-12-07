import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/sass/index.scss';

Vue.use(VueRouter); // 使用路由
Vue.use(VueResource); // ajax

// 定义路由
const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

// 实例化 router
const router = new VueRouter({
  linkActiveClass: 'active', // 选中的 class
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: {
  //   App
  // },
  render: h => h(App)
});

router.replace('/goods');
