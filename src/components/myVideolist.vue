<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-22 13:36:11
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 01:07:26
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
            <img v-lazy="list.img[0].url" @click="todetail(list.img[0].num)" />
          </div>
          <div class="list-main" v-if="!(index===0)">
            <img v-lazy="list.img[index].url" @click="todetail(list.img[index].num)" />
          </div>
        </div>
      </div>
      <div class="bottom-btn">
        <span v-if="list.hascahnge" @click="totype(list.mi_type)">
          更多精彩剧集
          <i class="iconfont icon-icon-test9"></i>
        </span>
        <span v-if="list.hasmore">
          换一换
          <i class="iconfont icon-loop"></i>
        </span>
      </div>
    </div>
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
      age: ""
    };
  },
  created() {
    //返送请求渲染首页信息
    if (this.type === "商城") {
      console.log("");
    } else {
      getVideo.call(this, {
        url: "http://localhost:3000/indexlist",
        type: this.type
      });
    }
    if (sessionStorage.getItem("data")) {
      this.$store.commit("add", sessionStorage.getItem("data"));
    }
    if (sessionStorage.getItem("type")) {
      this.$store.dispatch("willcahnge", sessionStorage.getItem("type"));
      // console.log(this.$store.state.type,this.type);
      // this.$router.push({name:"choosetype",params:{name:this.$store.state.type}});
    }
    // console.log("绑定了key，组件重新创建又被销毁");
    window.addEventListener(
      "beforeunload",
      function() {
        console.log("页面重新刷新前");
        sessionStorage.setItem("data", this.$store.state.age);
        sessionStorage.setItem("type", this.$store.state.type);
      }.bind(this)
    );
    //页面刷新，将保留的状态还原
    if (sessionStorage.getItem("left_positon")) {
      this.$store.commit("cahngeindex", sessionStorage.getItem("left_positon"));
    }
  },
  mounted() {},
  methods: {
    todetail(id) {
      console.log(id);
    },
    add() {
      this.$store.commit("add");
    },
    totype(type) {
      this.$router.push({ name: "choosetype", params: { name: type } });
      //将状态的改变通知到vuex state 中
      this.$store.dispatch("willcahnge", type);
      //不进要修改vuex 数据，还要重新存一下这个type 在本地存储
      sessionStorage.setItem("type", this.$store.state.type);
      // console.log("hello world",this.$store.state.type,type);
      //刷新页面的时候 将当前的type 存放到 本地存储中
      //跳转的时候同时让头部的导航跟着一起运动
      this.fllownav(type);
    },
    fllownav(type) {
      this.$store.state.list.forEach((item, index) => {
        if (item.name === type) {
          //通过vuex 告知给heade组件
          this.$store.commit("cahngeindex", index);
          //把这个值存到本地存贮中 防止状态丢失
          sessionStorage.setItem("left_positon", index);
        }
      });
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
/* 引入字体图标库的css */
@import url("../../public/font_1700396_m9lb7eo4z1/iconfont.css");

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

.bottom-btn {
  padding: 0.08rem;
  display: flex;
  justify-content: space-around;
}
.bottom-btn span {
  display: inline-block;
  padding: 0.1rem 0.05rem;
  width: 40%;
  background-color: #f5f5f5;
  color: #666;
  border-radius: 0.1rem;
  text-align: center;
}
</style>