new WOW().init();


$(document).ready(function(){
   	 var show = true;
	 var countbox = ".section8";
	 $(window).on("scroll load resize", function(){
	  if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
	  var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
	  var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
	  var w_height = $(window).height();        // Высота окна браузера
	  var d_height = $(document).height();      // Высота всего документа
	  var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
	  if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	   
	   $('.count').each(function(){
	    $(this).animate({
	     count: $(this).data("name")
	    }, {
	     duration: 2000,
	     easing: 'swing',
	     step:function(now){
	      $(this).text(Math.ceil(now));
	     }
	    });
	   });

	   show = false;
	  }
	 });
});


// leave 
// $(window).mousemove(function(e) {
//     var change;
//     var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
//     var  xpos=xpos*2;ypos=ypos*2;
//     $('.section8-liefs__wrap , .block7-liefs__wrap').css('top',((0+(ypos/50))+"px"));
//     $('.section8-liefs__wrap , .block7-liefs__wrap').css('right',(( 0+(xpos/80))+"px"));
                   
//   });

