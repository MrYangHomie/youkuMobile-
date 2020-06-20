/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 00:15:28
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-21 00:48:28
 */ 
import service from "util/myAxios";


export function demo () {
    
    service.request({
        method: "get",
        url: "http://localhost:3000/books",
    })
    .then( res => {
        //在组件中使用需要赶住this的指向问题
        console.log(res.data);
    })
    .catch( rej => {
        console.log(rej);
    })
}