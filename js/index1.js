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
    // console.log(xl, lists2);
    lists2.mouseenter(function(){
        let index=$(this).index();
        $(xl).css("height","230px","z-index","500");
        $(xl).eq(index).css("z-index","600");
        lists2.mouseleave(function(){
        $(xl).css("z-index","500");
        $(xl).css("height","0");
    })
})
// 轮播图部分
    let banner =$(".banner");
    let lists = $(".scrile li");
    let img = $(".imgbox li"); 
    let choice_left = $(".banner .choice_left");
    let choice_right =$(".banner .choice_right");
    let t=setInterval(run, 1000);
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
   banner.hover(function(){clearInterval(t)},function(){t=setInterval(run, 1000);})
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

})