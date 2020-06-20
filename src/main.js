/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-21 00:25:27
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { demo } from "./api/myMain";
Vue.config.productionTip = false

demo();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
