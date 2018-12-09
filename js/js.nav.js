
$(document).ready(function(){
 $('.reg_wr').on('mouseover', function() {
    $('.img_wrap').addClass('hovered');	
    $(".hovered").css('filter','blur(4px)');   
});
   $('.reg_wr').on('mouseout', function() {
   	$(".hovered").css('filter','blur(0px)');
    $('.img_wrap').removeClass('hovered');	   
});

});

$(document).ready(function() {
var apocurelem = $('.lg');
var apolet = apocurelem.text().split('');
for(i in apolet) {
apolet[i] = '<span>' + apolet[i] + '</span>';
};
var text = apolet.join("");
apocurelem.html(text);
 
var apocolorarr = ['#EA2027', '#0652DD', '#009432', '#006266', '#1B1464'];
var min = 0;
var max = apocolorarr.length-1;
$('.lg span').each(function(index) {
var aporandom = min + Math.floor(Math.random() * (max + 1 - min));
$(this).css('color', apocolorarr[aporandom]);
});
});
