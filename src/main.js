import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// import 'common/sass/index.scss';

Vue.use(VueRouter); // 使用路由

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
  template: '<App/>',
  components: {
    App
  },
  router: router
});

router.push('/goods');
