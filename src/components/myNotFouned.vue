<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 00:08:23
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 00:36:10
--> 
<template>
  <div class="notfound">
      <img src="../../public/imgs/06a878907894542ae01269f9c480d7ad.jpg" alt="">
      <div class="tips">
        <p @click="toindex">回到首页</p>
        <p>联系我们</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"notfounded",
    created(){
        //进入到404页面，默认隐藏头部
        this.$store.commit("toggleheader",false);
    },
    methods:{
        toindex(){
            this.$router.push({name:"choosetype",params:{name:"首页"}});
             this.$store.commit("toggleheader");
        }
    }
}
</script>

<style scoped>
.notfound{
    width: 100%;
    height: 4rem;
}
.notfound img{
    width: 100%;
    height: 100%;
}
.tips{
    display: flex;
    justify-content: space-around;
    font-size: 20px;
}
.tips p {
    padding: 0.2rem;
    background-color: #fafafa;
}
.tips p:first-of-type{
    color: red;
    font-weight: 700;
}
</style>