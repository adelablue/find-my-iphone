$(document).ready(function(){
		
	$("#lang_ul li a").click(function(){
		alert($(this).attr("id"));

		$("#lang_ul li").removeClass("active");
		$(this).parent().addClass("active");

	});
		
	$("#device_ul li a").click(function(){
		alert($(this).attr("id"));

		$("#device_ul li").removeClass("active");
		$(this).parent().addClass("active");

	});


});