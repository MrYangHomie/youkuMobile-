/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 12:12:13
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 12:15:29
 */ 
import service from "util/myAxios";

export function getdetail(id){
    return new Promise(function(resolve,reject){
        service.request({
            url:"http://localhost/youku_php/goodsdetail.php",
            method:"get",
            params:{
                id
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