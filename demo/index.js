$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 5){
			$(".sticky").addClass("fixed-top ");
			$(".sticky").addClass("co ");
		}
		else{
			$(".sticky").removeClass("fixed-top ");
			$(".sticky").removeClass("co ");
		}
	});
});