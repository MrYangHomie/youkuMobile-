<!--
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:35:17
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-21 00:51:19
--> 
# 优酷空项目
### 网络请求
+ 默认安装了**swiper** 和**axios**(axios 已经在utils文件下配置了拦截与响应，请求的时候，按照嘻嘻老师的方式 调用请求函数 需要注意this的指向问题，否则请求到数据无法渲染到组件中)
+ 打开控制台是一个请求的实例 在**src/api/myMain** 的test函数
+ 如果想要处理网络请求和一些特殊功能的话 ，请使用模块化的方式进行开发
+ 后端mock数据的来源及分工
+ 优酷视频列表建议使用**json-server**来模拟数据,登录注册、购物车由后端人员杨燚来完成
### webpack路径优化，请查看vue.config.js</h3>
### 启动项目 npm start | npm run start
### 开发阶段的项目，请切换到dev分支，来上传代码