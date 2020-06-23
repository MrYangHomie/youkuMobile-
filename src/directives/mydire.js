/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 22:31:43
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-22 17:45:41
 */ 
 
export const mydrag = {
        inserted:function(el){
            //控制移动的 因素
            var x = 0;
            //记录屏幕的宽度
            // var w_h = 375;
            el.ontouchstart = function(){
                var prev = 0;
               el.ontouchmove = function(ev){
                   var e = ev||window.event;
                    var next = e.touches[0].screenX;
                    // console.log("下一次",next);
                    setTimeout(()=> { prev = next;},30);
                    //如果 当前的 移动距离 距离 屏幕的宽度越来越远，就是 往左走 这个时候 方向为 -  反之为 + 
                    if( prev >=  next ){
                        if(x >= 468) return false;
                        el.style.transform = `translateX(-${x+=3}px)`;
                    }else{
                            if(x <= 0)  x = 0;
                            el.style.transform = `translateX(-${x-=3}px)`;
                    }
               }
               document.body.ontouchend = function(){
                   console.log("拖拽结束");
               }
            }
        }
    }
