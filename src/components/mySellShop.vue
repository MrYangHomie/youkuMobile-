<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-25 18:24:52
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 00:44:13
--> 
<template>
  <div>
    <div class="sells" ref="main">
      <ul>
        <li class="sell-item" v-for="(item,index) in goodslist" :key="index" @click="todetail(item[0])">
          <div>
            <img v-lazy="item[7]" />
            <p>{{item[1]}}</p>
            <div class="bottom-info">
              <span>
                数量
                <em>{{item[3]}}</em>
              </span>
              <span>
                ￥
                <em>{{item[2]}}</em>
              </span>
            </div>
          </div>
        </li>
        <!-- <li class="sell-item">
          <div>
            <img
              src="https://image5.suning.cn/uimg/b2c/newcatentries/0070081143-000000000144879464_2_800x800.jpg"
              alt
            />
            <p>南极人【10双装】夏季男士丝袜超薄中筒袜男袜子薄款透气纯色商务袜P3038</p>
            <div class="bottom-info">
              <span>
                数量
                <em>158</em>
              </span>
              <span>
                ￥
                <em>25</em>
              </span>
            </div>
          </div>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "api/getGoods";

export default {
  name: "sellshop",
  data() {
    return {
      goodslist: [],
      isloading: false,
      next_index: 0,
    };
  },
  created() {
    if (this.$store.state.type === "商城") {
      this.$store.commit("sellshow", false);
    }
    getGoods()
      .then(res => {
        //将下一次的请求的开头 存下来
        
        this.next_index = res.data.next_index;
        // this.goodslist = res.data.body;
        this.goodslist =  res.data.body.map(item => {
          return JSON.parse(item);
        });
      })
      .catch(rej => console.log(rej));
     
        window.addEventListener("scroll", this.getmoregoods);
      
  },
  methods: {
    getmoregoods: function() {
       if(this.$store.state.type !== "商城") return false;
      //当滚动高度  >= 图片容器的高度 - 可视区域 时候重新请求数据
      //可视区域高度
      var height = window.innerHeight;
      //容器高度
      var main_height = parseInt((this.goodslist.length / 2) * 251.44);
      //容器头部距离顶部的高度
      var reduce_height = this.$refs.main.offsetTop;
      //滚动的高度
      var scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scroll = scrolltop - reduce_height;
      //处理滚动逻辑
      var isend = this.judge_possiton(height, main_height, scroll);
      if (this.isloading) return false;
      if (isend) {
        this.isloading = true;
        console.log("到底了，重新请求数据了,加载完成后将这个变量值为false");
        getGoods(this.next_index)
          .then(res => {
            //将下一次的请求的开头 存下来
            console.log(res.data);
            this.next_index = res.data.next_index;
            res.data.body.forEach( item => {
              this.goodslist.push(JSON.parse(item));
            })
            console.log(this.goodslist);
            //每一次请求完成了将loading  值为 false
            this.isloading = false;
          })
          .catch(rej => console.log(rej));
      }
    },
    judge_possiton(x, y, z) {
      if (Math.ceil(z) >= y - z) {
        return true;
      } else {
        return false;
      }
    },
    todetail(id){
      this.$router.push({name:"goodsdetail",params:{id}});
    }
  }
};
</script>

<style scoped>
.sells ul {
  overflow: hidden;
}
.sells ul li {
  float: left;
  width: 45%;
  padding: 0 0.09rem 0.09rem;
}
.sell-item {
  font-size: 14px;
}
.sell-item > div {
  /* width: 40%; */
}
.sell-item > div img {
  width: 100%;
}
.sell-item p {
  margin: 0.05rem 0;
  height: 40px;
  overflow: hidden;
}
.bottom-info {
  box-sizing: border-box;
  padding: 0.05rem 0rem;
  vertical-align: middle;
}
.bottom-info span:last-of-type {
  float: right;
}
.bottom-info span:last-of-type em {
  /* color: red;
  font-size: 16px; */
}
</style>