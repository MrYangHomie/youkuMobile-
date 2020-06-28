<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 00:37:36
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 15:12:20
--> 
<template>
  <div class="goods">
    <div class="goback" @click="toindex">
      <i class="iconfont icon-weibiaoti--1 myinco"></i>
    </div>
    <h5>{{goods.goods_name}}</h5>
    <img :src="goods.goods_big_logo" alt="">
    <div class="money">
      <div class="count">
           <button @click="reduce">-</button> <input type="text" v-model="count"><button @click="add">+</button>
      </div>
      <div class="rmb">
         总价: {{ reduce_money }}
      </div>
      <div class="add_goods">
          <span>立即购买</span>
          <span>加入购物车</span>
      </div>
    </div>
    <!-- 预留在线聊天室功能 -->
    <div v-html="goods.goods_introduce" class="detail"></div>
  </div>
</template>

<script>
import { getdetail } from "api/goodsdetail";
export default {
  name: "goodsdetail",
  props: ["id"],
  data() {
    return {
      goods: "",
      count:1
    };
  },
  created() {
    //进入到404页面，默认隐藏头部
    this.$store.commit("toggleheader", false);
    getdetail(this.id).then(res => {
     this.goods = JSON.parse(res.data.body);
    });
  },
  methods: {
    toindex() {
      this.$router.go(-1);
      this.$store.commit("toggleheader");
    },
    add(){
        if(this.count>=20){
            if(confirm("确认还要添加吗?")){
                this.count++;
            }else{
                return false;
            }
        }else{
             this.count++;
        }
       
    },
    reduce(){
        if(this.count <= 1){
            return false;
        }
        this.count--;
    }
  },
  watch: {
    id: function() {
      this.$store.commit("toggleheader", false);
      getdetail(this.id).then(res => {
         this.goods = JSON.parse(res.data.body);
        console.log(this.goods);
      });
    }
  },
  computed:{
      reduce_money:function(){
          return this.count * this.goods.goods_price;
      }
  }
};
</script>

<style scoped>
@import url("../../public/font_1700396_m9lb7eo4z1/iconfont.css");
.myinco {
  display: inline-block;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
}
.goods{
   padding: 0.1rem 0.1rem;
}
.goods img{
    width: 100%;
}
h5{
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
}
.detail {
    font-size: 14px;
}
.money{
    overflow: hidden;
    padding: 0.1rem 0;
}
.money .count{
    padding-left: 0.5rem;
    float: left;
}
.money .count input{
    width: 20px;
    text-align: center;
}
.money .count button{
    width: 20px;

}
.money .rmb{
     padding-right: 0.5rem;
    float: right;
}
.add_goods{
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    color: #fff;

}
.add_goods span{
    background-color: red;
    padding: 0.1rem;
}
.add_goods span:first-of-type{
    background-color: darkgreen;

}
</style>