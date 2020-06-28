<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 15:15:27
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-27 01:57:32
--> 
<template>
  <div>
    <i class="iconfont icon-weibiaoti--1 myinco" @click="goback"></i>
    <div class="login-box">
      <div class="mes-box" v-if="msglogin">
        <h4>短信验证码登录</h4>
        <p>
          <input type="number" placeholder="请输入手机号码" ref="phone"/>
        </p>
        <p>
          <input type="text" placeholder="请输入验证码" ref="code" />
          <span id="getcode" @click="getcode">获取验证码</span>
        </p>
      </div>
      <div class="mes-box" v-else>
        <h4>账号登录</h4>
        <p>
          <input type="number" placeholder="手机/邮箱"/>
        </p>
        <p>
          <input type="password" placeholder="请输入密码"/>
        </p>
      </div>
      <div v-if="tips" :class="{nophone:npc,sends:sec}" class="commic">
          请输入手机号
      </div>
      <div class="login">
        <p :class="{msg_login:msgclas,num_login:!numclass}" @click="submituser">登录</p>
        <span>或</span>
        <p :class="{msg_login:!msgclas,num_login:numclass}" @click="changloginbar" ref="target">账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import {judgephone} from "util/judgephone";
import {getCode} from "api/getCode";
import {userLogin} from "api/userLogin";
export default {
  name: "myLogin",
  data(){
      return {
          msgclas:true,
          numclass:true,
          msglogin:true,
          tips:false,
          npc:false,
          sec:false,
          code:true
      }
  },
  created() {
    this.$store.commit("toggleheader", false);
  },
  methods: {
    goback() {
      this.$router.go(-1);
      this.$store.commit("toggleheader");
    },
    changloginbar(){
        this.msglogin = !this.msglogin;
        if(this.$refs.target.innerHTML === "账号登录"){
            this.$refs.target.innerHTML = "手机验证码快捷登录";
        }else{
            this.$refs.target.innerHTML = "账号登录";
        }
    },
    submituser(){
        if(this.code){
          console.log(1);
          userLogin(this.$refs.phone.value,this.$refs.code.value)
          .then( res => {
            console.log(res.data);
            if(res.data.code === 200){
              alert("登录成功")
              // this.$route.push("")
            }
          })
        }
    },
    getcode(e){
        
        if(this.$refs.phone.value === ""){
            this.tips = this.npc = true;
            return false;
        }
        if(judgephone(this.$refs.phone.value)){
           //发送请求，请求验证码
          //  console.log(this.$refs.phone.value);
           getCode(this.$refs.phone.value)
           .then( res => {
             console.log(res.data);
             if(res.data.Message ==="OK"){
               this.code = true;
             }
           })
           .catch(rej => {
             console.log(rej);
           })
        }
        var time = 60;
        var timer = setInterval( () => {
            if(time === 0){
                 e.target.innerHTML = "获取验证码";
                clearInterval(timer);
            }else{
            e.target.innerHTML = `${time--}秒后重发`;
            }
            
        },1000) 
    }
  }
};
</script>

<style scoped>
@import url("../../public/font_1700396_m9lb7eo4z1/iconfont.css");
.msg_login{
 color: #fff;
 background-color: blue;   
 border-radius: 0.4rem;
}
.login span{
    margin: 0.1rem 0;
    font-size: 0.14rem;
    display: inline-block;
}
.num_login{
    color: blue;
 border-radius: 0.4rem;
    border: 1px solid blue;
}
.myinco {
  font-size: 30px;
  width: 30px;
  height: 30px;
  display: inline-block;
  padding: 0.2rem 0.1rem;
}
.login-box {
  width: 80%;
  margin: 0 auto;
  font-size: 20px;
}
.login-box input {
  margin-left: 0.2rem;
  outline: none;
  border: 1px solid #f0f0f0;
  border-radius: 0.3rem;
  text-indent: 2em;
  height: 0.42rem;
  width: 80%;
}
.login-box p {
  padding: 0.1rem 0;
}
#getcode {
  position: absolute;
  right: 0.78rem;
  top: 1.6rem;
  font-size: 0.14rem;
  color: blueviolet;
}
.nophone{
    color: red;
}
.sends{
    color: green;
}
.commic{
    font-size: 14px;
    margin-left: 0.2rem;
    padding: 0.05rem 0;
}
/* .login-box p:nth-of-type(2) > input {
  margin-left: 0.3rem;
} */
/* .login-box p:nth-of-type(4) > input {
  width: 0.8rem;
}
.login-box p:nth-of-type(4) > span {
  float: right;
  font-size: 0.18rem;
  margin-right: 0.15rem;
  line-height: 0.35rem;
} */
.login-box h4 {
  text-align: center;
  position: absolute;
  top: 0.28rem;
  left: 50%;
  margin-left: -0.7rem;
}
.login {
  text-align: center;
}
</style>