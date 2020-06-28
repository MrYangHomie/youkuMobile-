<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-16 23:11:43
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 17:20:06
--> 
<template>
  <div class="header" v-show="$store.state.showheader">
    <ul class="myheader">
      <li>
        <img src="https://img.alicdn.com/tfs/TB1XqTXka61gK0jSZFlXXXDKFXa-180-36.png" />
      </li>
      <li>
        <div>
          <input type="text" :placeholder="$store.state.type" @click="showSearch" />
          <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" />
        </div>
      </li>
      <li @click="tologin">
        <img
          src="https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png"
          id="default-user-img"
        />
      </li>
    </ul>
    <!-- 搜索框 -->
    <div class="searchInfo" v-show="isShowSearch">
      <p>
        <i></i>
        <span>大家都在搜</span>
      </p>
      <ul>
        <li v-for="info in serachInfo" :key="info.id">
          <span>{{info.id}}</span>
          <p :data="info.production_time">{{info.des}}</p>
        </li>
      </ul>
      <div @click="showSearch">关闭</div>
    </div>
    <div class="ser-items">
      <!-- 通过计算属性来修改left 的值 -->
      <ul class="clearAll myul" v-mydrag :style="{transform: 'translateX('+$store.getters.moveing+')'}">
        <router-link
          v-for="item in list"
          :class="{show:item.showclass = $store.state.type === item.name?true:false}"
          :to="'/oncetype/'+item.name"
          :key="item.id"
          @click.native="changename($event,item.name)"
          tag="li"
        >
          {{item.name}}
          <span v-show="item.showclass"></span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { serach } from "../api/headerSerach";
import { mydrag } from "dires/mydire";

export default {
  name: "myHeader",
  data() {
    return {
      isShowSearch: false,
      serachInfo: "",
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
        { id: "1013", name: "文化", showclass: false },
        { id: "1014", name: "商城", showclass: false}
      ],
      trans_type:"首页",
    };
  },
  methods: {
    changename(e, name) {
      // this.$store.dispatch("willcahnge",)
      this.list.forEach((item,index) => {
        item.showclass = false;
        if (name == item.name) {
           this.$store.dispatch("willcahnge",name);
           this.$store.commit("cahngeindex",index);
           sessionStorage.setItem("left_positon",index);
           //如果当前点击的是周边商城，那就让轮播图隐藏掉
           if(name === "商城"){
             this.$store.commit("sellshow",false);
            //  console.log(this.$store.state.sellshow)
           }else{
              this.$store.commit("sellshow");
           }
           //同样的修改 move_index 的索引
          item.showclass = true;
        }
      });
    },
    showSearch() {
      //给个延时器  防止空白
      setTimeout(() => (this.isShowSearch = !this.isShowSearch), 500);
      //只请求一次
      if (!this.serachInfo) {
        serach.call(this);
      }
    },
    tologin(){
      this.$router.push({name:"login"});
      this.$store.commit("toggleheader", false);
    }
  },
  directives: {
    mydrag
  },
  created() {
    // this.trans_type
    console.log("组件状态已经改变");
     this.$store.commit("toggleheader");
    this.list.forEach(item => {
      item.showclass = false;
      if (this.$store.state.type == item.name) {
        item.showclass = true;
        // console.log(this.$store.state.type);
      }
    });
  }
};
</script>

<style scoped>
.show {
  color: blue;
  font-weight: 700;
}
.myul {
  touch-action: none;
}
.header {
  height: 0.44rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
}
.header .myheader {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
}
.header .myheader:first-of-type img {
  height: 0.165rem;
  width: 0.84rem;
}
.header .myheader li input {
  height: 0.3rem;
  width: 2.15rem;
  background-color: rgba(0, 0, 0, 0.06);
  outline: none;
  border: none;
  border-radius: 0.3rem;
  text-indent: 1em;
}

.header .myheader li:last-of-type img {
  width: 0.22rem;
  height: 0.22rem;
}
.header .myheader li:nth-of-type(2) img {
  width: 0.16rem;
  height: 0.16rem;
  position: absolute;
  right: 0.1rem;
  top: 50%;
  margin-top: -0.08rem;
}
.header .myheader li:nth-of-type(2) {
  position: relative;
}
.searchInfo {
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  margin-top: -0.1rem;
}
.searchInfo > p,
.searchInfo ul {
  padding: 0.15rem 0.2rem 0;
  position: relative;
}
.searchInfo ul li {
  list-style: none;
}
.searchInfo > p:first-of-type {
  line-height: 0.24rem;
  vertical-align: middle;
  color: #909090;
}
.searchInfo i {
  vertical-align: middle;
  margin-right: 0.05rem;
  display: inline-block;
  width: 0.05rem;
  height: 0.2rem;
  background-color: blue;
}
.searchInfo li {
  display: flex;
  padding: 0.1rem 0;
  align-items: center;
}
.searchInfo li > span {
  display: inline-block;
  width: 0.13rem;
  height: 0.24rem;
  background-color: red;
  vertical-align: middle;
  color: #fff;
  text-align: center;
  line-height: 0.24rem;
}
.searchInfo li > p {
  padding-left: 0.1rem;
  color: #444;
  font-size: 0.14rem;
}
.searchInfo > div {
  width: 100%;
  padding: 0.1rem 0;
  text-align: center;
  background-color: #f5f5f5;
  color: #222;
}
.ser-items {
  width: 100%;
  /* overflow: hidden; */
  height: 0.4rem;
  margin-top: -0.15rem;
  background: #fff;
}
.ser-items ul {
  width: 9rem;
  position: fixed;
}
.ser-items ul li {
  float: left;
  padding: 0.1rem;
  position: relative;
}
.ser-items ul li span {
  position: absolute;
  width: 0.05rem;
  height: 0.05rem;
  background-color: blue;
  border-radius: 50%;
  left: 0.24rem;
  top: 0.3rem;
}
</style>