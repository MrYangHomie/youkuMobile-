/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 22:45:40
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-27 02:19:26
 */ 
import service from "util/myAxios";
export function userLogin(num,code){
    return new Promise(function(resolve,reject){
        service.request({
            url:"http://localhost/youku_php/registerphone.php",
            method:"get",
            params:{
                phonenum:num,
                code:code
            },
            withCredentials:true //允许前端获取后端设置的 sesson  数据  但是会引发新的问题，原先的跨域头不能是通配符，必须是当前的请求地址  并且需要设置
            //在php头部添加  header("Access-Control-Allow-Credentials: true");
        })
        .then( res => {
            resolve(res);
        })
        .catch(rej => {
            reject(rej);
        })
    })
}