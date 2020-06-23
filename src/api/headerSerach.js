/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 20:52:06
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-22 17:56:40
 */
import service from "util/myAxios";


export function serach() {

    service.request({
            method: "get",
            url: "http://localhost:3000/search",
        })
        .then(res => {
            //在组件中使用需要赶住this的指向问题
            this.serachInfo = res.data;
            var time = "";
            this.serachInfo.forEach((item, index) => {
                var d = new Date(eval(item.production_time));
                time = `数据更新于:${d.getFullYear()}-${d.getMonth() +
              1}-${d.getDate()}`;
                this.serachInfo[index].production_time = time;
            });


        })
        .catch(rej => {
            console.log(rej);
        })
}