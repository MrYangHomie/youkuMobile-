/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-20 23:46:48
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-21 00:00:10
 */ 
module.exports = {
    devServer:{
        open:true,
        port:1017
    },
    configureWebpack:{
        resolve:{
            alias:{
                //自动查找组件
                "com":"@/components", 
                //查找api  处理请求
                "api":"@/api", 
                //过滤器
                "filt":"@/filters", 
                //混入对象
                "mins":"@/minxins", 
                //页面级别组件
                "view":"@/views",
                //特殊功能封装函数
                "util":"@/utils",
                //自定义指令
                "dires":"@/directives",
            }
        }
    },
    lintOnSave: false//取消eslint代码校验
}