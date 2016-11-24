$(document).ready(function(){
		
	$("#lang_ul li a").click(function(){
		alert($(this).attr("id").substr(5));

		$("#lang_ul li").removeClass("active");
		$(this).parent().addClass("active");

		$(".sv,.no,.en").hide();
		$("."+$(this).attr("id").substr(5)).show();

	});

});