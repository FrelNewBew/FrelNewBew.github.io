
$(document).ready(function(){
 $('.registr').on('mouseover', function() {
    $('.wrp_img').addClass('blure');	
    $(".blure").css('filter','blur(4px)');   
});
   $('.registr').on('mouseout', function() {
   	$(".blure").css('filter','blur(0px)');
    $('.wrp_img').removeClass('blure');	   
});

});

$(document).ready(function() {
var apocurelem = $('.logo');
var apolet = apocurelem.text().split('');
for(i in apolet) {
apolet[i] = '<span>' + apolet[i] + '</span>';
};
var text = apolet.join("");
apocurelem.html(text);
 
var apocolorarr = ['#F1C40F', '#D31D23', '#0540AF', '#dcdde1'];
var min = 0;
var max = apocolorarr.length-1;
$('.logo span').each(function(index) {
var aporandom = min + Math.floor(Math.random() * (max + 1 - min));
$(this).css('color', apocolorarr[aporandom]);
});

});

