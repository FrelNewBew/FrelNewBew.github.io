
$(document).ready(function(){    
 var  para=$('.box1');
 var image=$('.box2');
 para.on('click', function() {
  image.fadeOut();
 

 })
para.off('click', function(){
  image.off('click');
})
  






});

// $(document).ready(function(){    
//   $(".box2").on("click", function(){
//   $(this).css({'width'  : '100%'});
//   $(".box1").css({'width': '3%'});
//   $(".box3").css({'width': '3%'});
// });

// });

// $(document).ready(function(){    
//   $(".box3").on("click", function(){
//   $(this).css({'width'  : '100%'});
//   $(".box2").css({'width': '3%'});
//   $(".box1").css({'width': '3%'});
// });

// });


