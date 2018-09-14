$(function(){
  //购物车选项卡
  let login2 = $(".login2");
  let shop_footer = $("#shop_footer");
  login2.mouseenter(function(){
   shop_footer.css("height","100px")
   shop_footer.css("boxShadow","0 2px 15px 1px rgba(0,0,0,0.5)")
 })
  login2.mouseleave(function(){
    shop_footer.css("height","0");
  })
    // 侧导航选项卡
    let left =$(".left");
    let GT = $(".GT");
    left.mouseenter(function(){
      let index=$(this).index()
      GT.eq(index).css("display","block");
      left.mouseleave(function(){
       GT.eq(index).css("display","none");
     })
    })

 ///////////////////////////////////////////////导航栏移入出现下拉商品的效果////////////////////////////////
 let xl =$(".nav_box .nav .nav1 .xl");
 let lists2 = $(".nav .six");
 lists2.mouseenter(function(){
  xl.css("z-index","500");
  let index=$(this).index();
  $(xl).css("height","230px");
  $(xl).eq(index).css("z-index","600");
  lists2.mouseleave(function(){
    $(xl).css("height","0");
  })
})
// 轮播图部分
let banner =$(".banner");
let lists = $(".scrile li");
let img = $(".imgbox li"); 
let choice_left = $(".banner .choice_left");
let choice_right =$(".banner .choice_right");
let t=setInterval(run, 2000);
let index=img.index();
function run(type="next"){
  if(type=="next"){
   index++;
   if(index>img.length-1)
   {
     index=0;
   }
 }
 else{
  console.log(index)
  index--;
  if(index<0){
   index=img.length-1;  
 }
}
img.css("z-index","0").eq(index).css("z-index",10)
lists.removeClass("point").eq(index).addClass("point")
}
   // 鼠标移入移出
   banner.hover(function(){clearInterval(t)},function(){t=setInterval(run, 2000);})
  // 鼠标点击左右箭头
  choice_left.click(function() {
   run("prev");
 });
  choice_right.click(function() {
   run("next");
 });
    //点击小点切换
    lists.click(function() {
     let index1=$(this).index()
     lists.removeClass("point").eq(index1).addClass("point");
     img.css("z-index","0").eq(index1).css("z-index",10);
     index=index1;
   });
// 小米闪购布局
let sg = $(".sg .show ul");
let choices1_L = $(".sg .title .title_right a .arrow1");
let choices1_R =$(".sg .title .title_right a .arrow2");
let ul= $(".sg .show ul");
let widths1 =parseInt(ul.width()/13);
let times1 = 0;
let x = 4;
choices1_R.click(function(){ 
  times1++;
  if (times1 == 3) {
    x = 3;
  }
  if (times1 == 4) {
    x = 3;
    times1 = 3;
  } 

  sg.css("transform","translateX(" + (-widths1*x* times1) + "px)");
})
choices1_L.click(function(){
  times1--;
  if (times1 == 2) {
    x = 4;
  }
  if (times1 == -1) {
    times1 = 0;
  }
  sg.css("transform","translateX(" + (-widths1 * 4 * times1) + "px)") 
})

// 为您推荐部分
let Recommend = $(".wn .Recommend");
let choices_L = $(".wn .title .title_right a .arrow1");
let choices_R = $(".wn .title .title_right a .arrow2");
let widths = parseInt(Recommend.width()) / 3;
let times = 0;
choices_R.click( function(){
  times++;
  if (times == 3) {
    times = 2;
  }
  Recommend.css("transform","translateX(" + (-widths * times) + "px)")

})

choices_L.click(function(){
  times--;
  if (times == -1) {
    times = 0;
  }
  Recommend.css("transform","translateX(" + (-widths * times) + "px)")
})
 // 小米内容部分封装部分
 
 function content(box, box_move, left, right, littles, now, next,widths) {
  let section1 =$(box);
  let box1 = $(box_move);
  let btn1L =$(left);
  let btn1R = $(right);
  let little =$(littles);
  let width1 = $(widths).width();
  let flag;
  let now1 =0;
  let next1 =0;
//    滚动效果
//     let t1=setInterval(move1,2000);
        // let now1 = next1 = 0;

        function move1() {
          if (flag == false) {
            return;
          }
          next1++;
          if (next1 == box1.length) {
            next1 = 0;
          }
          box1.eq(next1).css("left",width1 + "px").animate({left:0},function(){flag = true})
          box1.eq(now1).animate({left:-width1+"px"},function(){flag = true})
          little.eq(now1).removeClass('scrile1')
          little.eq(next1).addClass('scrile1')
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
          box1.eq(next1).css("left",-width1 + "px").animate({left:0},function () {
            flag = true})
          box1.eq(now1).animate({left: width1+"px"},function () {
            flag = true})
          little.eq(now1).removeClass("scrile1")
          little.eq(next1).addClass("scrile1")
          now1 = next1;
          flag = false;
        }
        btn1L.click(function () {
          if (now1 == 0) {
            return;
          }
          move1R();
        })
        btn1R.click(function () {
          if (now1 == box1.length - 1) {
            return;
          }
          move1();
        })
//   点击小点时的效果
little.each(function (i,v) {
  $(v).click(function () { 
    if (now1 == i) {
      return;
    } else if (i > now1) {
      box1.eq(i).css("left",width1 + "px").animate({left:0},function () {
        flag = true
      })
      box1.eq(now1).animate({left:-width1},function () {
        flag = true
      })

      little.eq(now1).removeClass("scrile1")
      little.eq(i).addClass("scrile1")
    } else {
      box1.eq(i).css("left",-width1+"px").animate({left:0},function () {
        flag = true
      })
      box1.eq(now1).animate({left: width1},)
      little.eq(now1).removeClass("scrile1")
      little.eq(i).addClass("scrile1")
    }
    now1 = next1 = i;
  })
}) 
}
 // 图书的调用
 content(".list_one", ".list_one .list", ".list_one .btnL", ".list_one .btnR", ".list_one .littles span", 0, 0,".list_two");
    //MIUI主题
    content(".list_two", ".list_two .list", ".list_two .btnL", ".list_two .btnR", ".list_two .littles span", 0, 0,".list_two");
    //游戏
    content(".list_three", ".list_three .list", ".list_three .btnL", ".list_three .btnR", ".list_three .littles span", 0, 0,".list_two");
    //应用
    content(".list_four", ".list_four .list", ".list_four .btnL", ".list_four .btnR", ".list_four .littles span", 0, 0,".list_two");


// ///////////////////封装选项卡(家电，搭配，周边，配件，智能）的功能函数//////////////////
   function tab(choice1,box1){
       let choice=$(choice1)
       let box=$(box1)
       choice.mouseenter(function() {
       let index=$(this).index();
       box.css("z-index",5)
       choice.css({"border-bottom":"2px solid rgba(0,0,0,0.0)","color":"#000"} )
       choice.eq(index).css({"border-bottom":"2px solid #ff6700","color":"#ff6700"} )
       box.eq(index).css("z-index",10);
 });
     }
 //家电选项卡
   tab(".house .top .right li", ".house1");
    //   智能选项卡
    tab(".Intelligence .top .right li", ".Intelligence1");
    //  搭配选项卡
    tab(".collocation .top .right li", ".collocation1");
    //  配件选项卡
    tab(".parts .top .right li", ".parts1");
    //  周边选项卡
    tab(".periphery .top .right li", ".periphery1");
 // 返回顶部效果   
  let goback=$(".bar1 .bar_top2")
  goback.click(function(){
        $(document.body).animate({scrollTop:0},2000)
        $(document.documentElement).animate({scrollTop:0},2000)
        
  })
  })

























