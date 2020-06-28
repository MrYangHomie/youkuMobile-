/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-26 17:43:39
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-26 17:45:55
 */ 
export function judgephone(num){
    var reg = new RegExp("^1[1-9]\\d{9}$");
    console.log(reg);
    if(reg.test(num)){
        return true;
    }else{
        return false;
    }
}