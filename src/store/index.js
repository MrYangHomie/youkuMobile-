/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-23 19:33:55
 */ 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    age:10,
    type:"首页"
  },
  mutations: {
    add(state,payload){
      if(!payload){
        state.age++;
      }else{
        state.age = payload;
      }
    },
    cahngetype(state,type){
      state.type = type;
    }
  },
  actions: {
    willcahnge:function(context,type){
      context.commit("cahngetype",type);
    }
  },
  modules: {
  }
})
