<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 23:13:14
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-25 18:04:17
--> 
<template>
  <div class="slider" v-show="$store.state.sellshow">
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item v-for="img in imgs" :key="img.id">
        <img :src="'/'+img.url"/>
      </mt-swipe-item>
    </mt-swipe>
    
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import { getImg } from "api/bannerInfo";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: "myBanner",
  props:["type"],
  data(){
    return {
      imgs:""
    }
  },
  created(){
    if(this.type === "商城") return false;
    getImg.call(this,{
      url:"http://localhost:3000/banner",
      name:this.type
    })
  }
};
</script>

<style scoped>

@import url("../assets/mint.css");

.slider{
    width: 100%;
    height: 1.88rem;
    /* overflow: hidden; */
}
.slider img{
    width: 100%;
    height: 100%;
}
/* .mint-swipe{
  z-index: -1;
} */

</style>