/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-27 02:07:35
 */ 
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
import VueLazyload from 'vue-lazyload'
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.use(VueLazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
