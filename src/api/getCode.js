/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 22:45:40
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-27 16:16:45
 */ 
import service from "util/myAxios";
export function getCode(num){
    return new Promise(function(resolve,reject){
        service.request({
            url:"http://localhost/dysms_php/aliyun-dysms-php-sdk/api_demo/SmsDemo.php",
            method:"get",
            params:{
                telphone:num
            },
            withCredentials:true
        })
        .then( res => {
            resolve(res);
        })
        .catch(rej => {
            reject(rej);
        })
    })
}