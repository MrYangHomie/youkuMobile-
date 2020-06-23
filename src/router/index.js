/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:34:53
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-22 16:00:32
 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';
const onceType = () => import( /* webpackChunkName: 'index' */ "view/VonceType");
// const videoList = () => import ( /* webpackChunkName: videolist */ "com/myVideolist");

Vue.use(VueRouter);

  const routes = [
    // {
    //   //默认进入到首页 渲染一次
    //   path:"/",
    //   redirect:"/index",
    // },
    {
      path:"/",
      component:onceType,
      props:true
    },
    {
      path:"/oncetype/:name",
      component:onceType,
      props:true
    },
    

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
