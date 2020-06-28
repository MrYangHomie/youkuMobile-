/*
 * @Description: 越哥哥的小代码,看看就行了v
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-25 16:51:04
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-25 22:04:37
 */ 
import service from "util/myAxios";

export function getGoods(next){
    return new Promise(function(resolve,reject){
        //请求体
        service.request({
            url:"http://localhost/youku_php/getgoods.php",
            method:"get",
            params:{
                next:next?next:0
            }
        })
        .then( res => {
            resolve(res);
        })
        .catch( rej => {
            reject(rej);
        })
    })
}