/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-23 11:06:57
 */ 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:10
  },
  mutations: {
    add(state,payload){
      if(!payload){
        state.age++
        console.log(111);
      }else{
        state.age = payload;
        console.log(222);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
