// custom.js

$(window).scroll (function(){
	if($(this).scrollTop()>5){
		$(".navi").addClass("fixed-top navbar-dark bg-dark");
	}
	else{
		$(".navi").removeClass("fixed-top navbar-dark bg-dark");
	}
})