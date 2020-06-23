/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-22 00:24:57
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-22 18:47:02
 */ 
import service from "util/myAxios";

export function getImg (options) {
    service.request({
        method: "get",
        url: options.url,
        params:{
            id:options.name
        }
    })
    .then( res => {
        //在组件中使用需要赶住this的指向问题
        this.imgs = res.data[0].body;
    })
    .catch( rej => {
        console.log(rej);
    })
}