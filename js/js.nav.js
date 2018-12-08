
$(document).ready(function(){
 $('.reg_wr').on('mouseover', function() {
    $('.img_wrap').addClass('hovered');	
    $(".hovered").css('filter','blur(10px)');   
});
   $('.reg_wr').on('mouseout', function() {
   	$(".hovered").css('filter','blur(0px)');
    $('.img_wrap').removeClass('hovered');	   
});

});



