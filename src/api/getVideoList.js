/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-22 17:24:39
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-23 19:13:13
 */ 
import service from "util/myAxios";

export function getVideo(options){
    service.request({
        url:options.url,
        method:"get",
        params:{
            type:options.type
        }
    })
    .then( res =>  {
        this.videolist = res.data[0].data;
        //渲染数据列表
    })
    .catch( rej => console.log(rej));
}