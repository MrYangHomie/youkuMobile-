<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-22 13:36:11
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-23 11:13:19
--> 
<template>
  <div>
    <div class="type_list" v-for="list in videolist" :key="list.num">
      <!-- <div class="main-boxs">
        <div class="main-content" v-for="(item,index) in list.img" :key="index">
          <div class="main-box-head" v-if="list.img[index].isbig">
            <img :src="list.img[0].url" alt="">
          </div>
            <img :src="list.img[index].url" v-if="!(index===0)">
        </div>
      </div>-->
      <h2>{{list.mi_type}}</h2>
      <div class="main-list-box">
        <div class="main_box" v-for="(item,index) in list.img" :key="index">
          <div class="list-head" v-if="list.img[index].isbig">
            <img :src="list.img[0].url" @click="todetail(list.img[0].num)" />
          </div>
          <div class="list-main" v-if="!(index===0)">
            <img :src="list.img[index].url" @click="todetail(list.img[index].num)" />
          </div>
        </div>
      </div>
    </div>
    store中的值{{$store.state.age}}
    {{age}}
    <button @click="add">点击我修改</button>
  </div>
</template>

<script>
import { getVideo } from "api/getVideoList";
export default {
  name: "videoList",
  props: ["type"],
  data() {
    return {
      videolist: "",
      age:""
    };
  },
  created() {
    //返送请求渲染首页信息
    getVideo.call(this, {
      url: "http://localhost:3000/indexlist",
      type: this.type
    });
    if( localStorage.getItem("data") ){
      this.$store.commit("add",JSON.parse(localStorage.getItem("data")));
    }
    // console.log("绑定了key，组件重新创建又被销毁");
    window.addEventListener("beforeunload",function(){
      console.log("页面重新刷新前");
      localStorage.setItem("data",this.$store.state.age);
    }.bind(this))
  },
  methods: {
    todetail(id) {
      console.log(id);
    },
    add(){
      this.$store.commit("add");
    }
  },
  watch: {
    type: function() {
      // console.log("改变了,需要重新请求数据", this.$route.params.name);
      // getVideo.call(this, {
      //   url: "http://localhost:3000/indexlist",
      //   type: this.type
      // });
      console.log("重新请求");
    }
  }
};
</script>

<style scoped>
.main-list-box {
  width: 100%;
}

.type_list {
  width: 100%;
  overflow: hidden;
}
.type_list:first-of-type {
  padding-top: 0.05rem;
}
.main-list-box .main_box {
  width: 45%;
}

.main-list-box .main_box:first-of-type {
  width: 100%;
  padding: 0;
}
.main-list-box .main_box .list-head img {
  width: 100%;
  height: 100%;
}
.main-list-box .main_box .list-main img {
  width: 100%;
}
.main-list-box .main_box {
  padding: 0.09rem;
  float: left;
}
.type_list h2 {
  padding-left: 0.09rem;
  padding-bottom: 0.09rem;
}
</style>