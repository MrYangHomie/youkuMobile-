/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-24 23:15:52
 */ 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    age:10,
    type:"首页",
    list: [
      { id: "1001", name: "首页", showclass: true },
      { id: "1002", name: "会员", showclass: false },
      { id: "1003", name: "剧集", showclass: false },
      { id: "1004", name: "电影", showclass: false },
      { id: "1005", name: "综艺", showclass: false },
      { id: "1006", name: "动漫", showclass: false },
      { id: "1007", name: "少儿", showclass: false },
      { id: "1008", name: "教育", showclass: false },
      { id: "1009", name: "生活", showclass: false },
      { id: "1010", name: "游戏", showclass: false },
      { id: "1011", name: "咨询", showclass: false },
      { id: "1012", name: "体育", showclass: false },
      { id: "1013", name: "文化", showclass: false }
    ],
    move_index:0
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
      console.log("我是vuex中通过actions修改的操作",state.type);
    },
    cahngeindex(state,index){
      state.move_index = index;
      console.log(state.move_index);
    }
  },
  actions: {
    willcahnge:function(context,type){
      context.commit("cahngetype",type);
    }
  },
  getters:{
    moveing:function(state){
     return ("-"+ (state.move_index * 0.52) +"rem");
    }
  },
  modules: {
  }
})
