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
    // //家电选项卡部分
    // let house=document.querySelectorAll(".house1");
    // let choice=document.querySelectorAll(".house .top .right li");
    // for(let num3=choice.length-1;num3>-1;num3--){
    // choice[num3].onmouseenter=function(){
    //     for(let num3=choice.length-1;num3>-1;num3--){
    //         house[num3].style.zIndex=5;
    //         choice[num3].style.borderBottom="2px solid rgba(0,0,0,0.0)";
    //         choice[num3].style.color="#000000";
    //     }
    //     choice[num3].style.borderBottom="2px solid #ff6700";
    //     choice[num3].style.color="#ff6700";
    //     house[num3].style.zIndex=10;
    // }
    // }
// ///////////////////封装选项卡(家电，搭配，周边，配件，智能的功能函数//////////////////
    function tab (choice1,box1){
        let box=document.querySelectorAll(box1);
        let choice=document.querySelectorAll(choice1);
        for(let num=choice.length-1;num>-1;num--){
            choice[num].onmouseenter=function(){
                for(let num=choice.length-1;num>-1;num--){
                   box[num].style.zIndex=5;
                    choice[num].style.borderBottom="2px solid rgba(0,0,0,0.0)";
                    choice[num].style.color="#000000";
                }
                choice[num].style.borderBottom="2px solid #ff6700";
                choice[num].style.color="#ff6700";
               box[num].style.zIndex=10;
            }
        }
    }
    // 家电选项卡
    tab(".house .top .right li",".house1");
   //   智能选项卡
    tab(".Intelligence .top .right li",".Intelligence1");
   //  搭配选项卡
    tab(".collocation .top .right li",".collocation1");
    //  配件选项卡
    tab(".parts .top .right li",".parts1");
    //  周边选项卡
    tab(".periphery .top .right li",".periphery1");



// /*////////////////////////////////////////轮播图////////////////////////////////////////////////*/
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

// //////////////////////////////////// 内容里第一部分的轮播效果/////////////////////////////////////////////////


//     let section1=document.querySelector(".list_one");
//     let box1=document.querySelectorAll(".list_one .list");
//     let btn1L=document.querySelector(".list_one .btnL");
//     let btn1R=document.querySelector(".list_one .btnR");
//     let little=document.querySelectorAll(".list_one .littles span");
//     let littles=document.querySelector(".littles");
//     let width1=parseInt(getComputedStyle(littles,null).width);
//     let flag;
// //    滚动效果
// //     let t1=setInterval(move1,2000);
//     let now1=next1=0;
//     function move1(){
//         if(flag==false){
//             return;
//         }
//        next1++;
//         if(next1==box1.length){
//            next1=0;
//         }
//         box1[next1].style.left=width1+"px";
//         animate(box1[now1],{left:-width1},function (){flag=true});
//         animate(box1[next1],{left:0});
//         little[now1].classList.remove("scrile1");
//         little[next1].classList.add("scrile1");
//         now1=next1;
//         flag=false;
//     }
//     function move1R(){
//         if(flag==false){
//             return;
//         }
//         next1--;
//         if(next1<0){
//             next1=box1.length-1;
//         }
//         box1[next1].style.left=-width1+"px";
//         animate(box1[now1],{left:width1},function(){flag=true});
//         animate(box1[next1],{left:0});
//         little[now1].classList.remove("scrile1");
//         little[next1].classList.add("scrile1");
//         now1=next1;
//         flag=false;
//     }
//     //    鼠标移入移出效果
//    //  section1.onmouseenter=function(){
//    //      clearInterval(t1);
//    //  }
//    // section1.onmouseleave=function(){
//    //      t1=setInterval(move1,2000);
//    //  }
// //   鼠标点击左箭头，图片向右移动
//         btn1L.onclick=function(){
//         if(now1==0){
//             return;
//         }
//             move1R();
//         }
//        btn1R.onclick=function(){
//            if(now1==box1.length-1){
//                return;
//            }
//          move1();
//      }
// //   点击小点时的效果
//     little.forEach(function(v,i){
//         v.onclick=function() {
//             if(now1==i){
//                 return;
//             }else if(i>now1){
//                 box1[i].style=width1+"px";
//                 animate(box1[now1],{left:-width1},function (){flag=true});
//                 animate(box1[i],{left:0});
//                 little[now1].classList.remove("scrile1");
//                 little[i].classList.add("scrile1");
//             }else{
//                 box1[i].style.left=-width1+"px";
//                 animate(box1[now1],{left:width1},function (){flag=true});
//                 animate(box1[i],{left:0});
//                 little[now1].classList.remove("scrile1");
//                 little[i].classList.add("scrile1");
//             }
//             now1=next1=i;
//         }
//     })



// ///////////////////////////////////////////////内容部分的封装///////////////////////////////////////////
     function content(box,box_move,left,right,littles) {
         let section1 = document.querySelector(box);
         let box1 = document.querySelectorAll(box_move);
         let btn1L = document.querySelector(left);
         let btn1R = document.querySelector(right);
         let little = document.querySelectorAll(littles);
         let width1 =296;
         let flag;
         // console.log(width1,little);
//    滚动效果
//     let t1=setInterval(move1,2000);
         let now1 = next1 = 0;

         function move1() {
             if (flag == false) {
                 return;
             }
             next1++;
             if (next1 == box1.length) {
                 next1 = 0;
             }
             box1[next1].style.left = width1 + "px";
             animate(box1[now1], {left: -width1}, function () {
                 flag = true
             });
             animate(box1[next1], {left: 0});
             little[now1].classList.remove("scrile1");
             little[next1].classList.add("scrile1");
             now1 = next1;
             flag = false;
         }

         function move1R() {
             if (flag == false) {
                 return;
             }
             next1--;
             if (next1 < 0) {
                 next1 = box1.length - 1;
             }
             box1[next1].style.left = -width1 + "px";
             animate(box1[now1], {left: width1}, function () {
                 flag = true
             });
             animate(box1[next1], {left: 0});
             little[now1].classList.remove("scrile1");
             little[next1].classList.add("scrile1");
             now1 = next1;
             flag = false;
         }

         //    鼠标移入移出效果
         //  section1.onmouseenter=function(){
         //      clearInterval(t1);
         //  }
         // section1.onmouseleave=function(){
         //      t1=setInterval(move1,2000);
         //  }
//   鼠标点击左箭头，图片向右移动
         btn1L.onclick = function () {
             if (now1 == 0) {
                 return;
             }
             move1R();
         }
         btn1R.onclick = function () {
             if (now1 == box1.length - 1) {
                 return;
             }
             move1();
         }
//   点击小点时的效果
         little.forEach(function (v, i) {
             v.onclick = function () {
                 if (now1 == i) {
                     return;
                 } else if (i > now1) {
                     box1[i].style = width1 + "px";
                     animate(box1[now1], {left: -width1}, function () {
                         flag = true
                     });
                     animate(box1[i], {left: 0});
                     little[now1].classList.remove("scrile1");
                     little[i].classList.add("scrile1");
                 } else {
                     box1[i].style.left = -width1 + "px";
                     animate(box1[now1], {left: width1}, function () {
                         flag = true
                     });
                     animate(box1[i], {left: 0});
                     little[now1].classList.remove("scrile1");
                     little[i].classList.add("scrile1");
                 }
                 now1 = next1 = i;
             }
         })
     }
     // 图书的调用
    content(".list_one",".list_one .list",".list_one .btnL",".list_one .btnR",".list_one .littles span");
     //MIUI主题
    content(".list_two",".list_two .list",".list_two .btnL",".list_two .btnR",".list_two .littles span");
    //游戏
    content(".list_three",".list_three .list",".list_three .btnL",".list_three .btnR",".list_three .littles span");
    //应用
    content(".list_four",".list_four .list",".list_four .btnL",".list_four .btnR",".list_four .littles span");
}