<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 20:59:23
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-23 09:06:19
--> 
<template>
  <div class="main">
    <my-banner :type="mytype" :key="mytype"/>
    <!-- <keep-alive> -->
        <my-videolist :type="mytype" :key="'/'+mytype"/>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import myBanner from "com/myBanner";
import myVideolist from "com/myVideolist";
export default {
    name:"onceType",
    props:["name"],
    data(){
      return {
         mytype:"首页"
      }
    },
    created(){
     console.log("初始化组件");
    },
    methods:{
      tovideolist(){
        this.$router.push({name:"videoList",params:{id:"12345"}});
      }
    },
    watch:{
      name:function(){
        //或者this.name
        this.mytype = this.$route.params.name;
        console.log(this.name);
      }
    },
    components:{
      myBanner,myVideolist
    }
}
</script>

<style scoped>
.main{
  margin-top: 0.75rem;
}
</style>