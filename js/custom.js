$(function(){
  //메인페이지 header 아코디언메뉴
  $("header .title").click(function(){

    if($(this).next().css("display") == "none"){
      $(".sub").slideUp();
    }
    
    $(this).next().slideToggle();
  });
  /////////////////////////////////////////////////////////

  //서브페이지 header메뉴
 $("#header .menu > li").mouseenter(function(){
  var i = $(this).index();
  $(".sub_menu").eq(i).slideDown();
});
$("#header .sub_menu").mouseleave(function(){
  var i = $(this).index();
  $(".sub_menu").eq(i).slideUp();
});
/////////////////////////////////////////////////

//best메뉴 슬라이드
//왼쪽화살표버튼
$("#best .prev").click(function(){
  if($("#best .box").is(":animated")) return false;
  var last = $("#best .box > .menu").last();
  console.log(last)
  $("#best .box").prepend(last).css("left","-320px").animate({"left":'0px'},500)
});

//오른쪽 화살표
$("#best .next").click(function(){
  if($("#best .box").is(":animated")) return false;
  var first = $("#best .box > .menu").first();

  $("#best .box").animate({"left":"-320px"},500,function(){
    $(this).append(first).css("left","0px");
  });
});

//////////////////////////////////////////////////////////
  
//메인,서브페이지 탭
$(".tab > button").click(function(){

  var now = $(this).index();

  $("#contain > div").css("display","none").eq(now).css("display","block");
  $(".banner > li").css("display","none").eq(now).css("display","block");
});

/////////////////////////////////////////////////////////

//제품상세페이지 
$(".thumbs > a").click(function(e){
  e.preventDefault();

  var path = $(this).attr("href");
  var title = $(this).attr("title");

  $(".thumbs > a").removeClass("on");
  $(this).addClass("on");

  $("#largeImg > img").attr({"src":path, "alt":title});
  $("#largeImg > img").css("opacity",1).stop().animate({"opacity":1},300);

});
/////////////////////////////////////////////////////////////
});
