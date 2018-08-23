window.onload=function(){
    //购物车选项卡
    let login2=document.getElementsByClassName("login2");
    let shop_footer=document.getElementById("shop_footer");
    login2[0].onmouseenter=function(){
        shop_footer.style.height="100px";
        shop_footer.style.boxShadow="0 2px 15px 1px rgba(0,0,0,0.5)";
    }
    login2[0].onmouseleave=function(){
        shop_footer.style.height="0";
    }
    let left=document.getElementsByClassName("left");
    let GT=document.getElementsByClassName("GT");
    for(let i=0;i<left.length;i++){
        left[i].onmouseenter=function (){
            GT[i].style.display="block";
        }
        left[i].onmouseleave=function(){
            GT[i].style.display="none";
        }
    }
    //家电选项卡部分


/*////////////////////////////////////////轮播图////////////////////////////////////////////////*/
let banner=document.getElementsByClassName("banner")[0];
let point=banner.getElementsByClassName("scrile")[0];
let lists=point.getElementsByTagName("li");
let imgbox=document.getElementsByClassName("imgbox")[0];
let img=imgbox.getElementsByTagName("li");
let choice_left=banner.getElementsByClassName("choice_left")[0];
let choice_right=banner.getElementsByClassName("choice_right")[0];
     //轮播图鼠标移入移出
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
       t=setInterval(move,1000);
    }
    //轮播图点击左右箭头时的效果
    choice_left.onclick=function(){
        moveL();
    }
    choice_right.onclick=function(){
        move();
    }
    // 轮播图点击小点时的效果
    for(let i=0;i<lists.length;i++) {
        lists[i].onclick = function () {
            for(let j=0;j<lists.length;j++){
                lists[j].className="";
                img[j].style.zIndex="5";
            }
            lists[i].className = "point";
            img[i].style.zIndex="10";
            num=i;
        }
    }
     //轮播图自动滚动
    let t=setInterval(move,1000);
    let num=0;
   function move(){
       for (let i=0;i<img.length;i++) {
           lists[i].className="";
           img[i].style.zIndex="5";
       }
       img[num].style.zIndex="10";
       lists[num].className = "point";
       num++;
       if(num==img.length){
           num=0;
       }
   }

    function moveL(){
        for (i=0;i<img.length;i++) {
            img[i].style.zIndex="5";
            lists[i].className = "";
        }
        num--;
        if(num<0){
            num=img.length-1;
        }
        img[num].style.zIndex="10";
        lists[num].className = "point";
    }
    console.log(lists,img,choice_left,choice_right);

}
