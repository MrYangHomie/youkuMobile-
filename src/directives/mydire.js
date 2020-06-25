/*
 * @Description: 越哥哥的小代码,看看就行了
 * @Version: 版本更新中...
 * @Autor: YangYi
 * @Date: 2020-06-21 22:31:43
 * @LastEditors: YangYi
 * @LastEditTime: 2020-06-25 00:28:35
 */ 
 
export const mydrag = {
        inserted:function(el){
            //控制移动的 因素
            var x = 0;
            //记录屏幕的宽度
            // var w_h = 375;
            el.ontouchstart = function(){
                var prev = 0;
                var move_pos = this.style.cssText.indexOf("(");
                //当位移改变，同步到 我的拖拽事件中
                x = this.style.cssText.slice(move_pos+2,-5) * 100;
                console.log(this.children.length);
                //由于点击的时候，需要找到dom标签上的translate 属性，并且直接复制，当前位置如果超过范围，就让他等于最大返回为不能越界
                if(x >= 468){
                    x = 468;
                }
                console.log(this.children.length);
               el.ontouchmove = function(ev){
                   var e = ev||window.event;
                    var next = e.touches[0].screenX;
                    // console.log("下一次",next);
                    setTimeout(()=> { prev = next;},30);
                    //如果 当前的 移动距离 距离 屏幕的宽度越来越远，就是 往左走 这个时候 方向为 -  反之为 + 
                console.log(x);

                    if( prev >=  next ){
                        if(x >= 468) return false;
                        console.log(1);
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
