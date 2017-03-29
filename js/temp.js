;$(function(){
	/*-----------hottemp--------------*/
	var html = template('test');
	$("#hotcontent").html(html);
	for(var i = 0; i < 9; i++){
		$("#hotcontent").append($($(".innerhot")[0]).clone());
	};

	/*-----------floottemp----------------*/

	var motherfill = false,
		beautyfill = false,
		perfumefill = false,
		personalfill = false,
		bagfill = false,
		diamondfill = false,
		foodfill =  false;
	$(window).scroll(function(e){
		e = e || event;
		var top = $("body").scrollTop();
		if (!motherfill && top >= $(".baby").offset().top) {
			$(".mother").append($(".innerbaby").clone());
			motherfill = true;
		}
		if (!beautyfill && top >= $(".baby").offset().top) {
			$(".beauty").append($(".innerbaby").clone());
			beautyfill = true;
		}
		if (!perfumefill && top >= $(".baby").offset().top) {
			$(".perfume").append($(".innerbaby").clone());
			perfumefill = true;
		}
		if (!personalfill && top >= $(".baby").offset().top) {
			$(".personal").append($(".innerbaby").clone());
			personalfill = true;
		}
		if (!bagfill && top >= $(".baby").offset().top) {
			$(".bag").append($(".innerbaby").clone());
			bagfill = true;
		}
		if (!diamondfill && top >= $(".baby").offset().top) {
			$(".diamond").append($(".innerbaby").clone());
			diamondfill = true;
		}
		if (!foodfill && top >= $(".baby").offset().top) {
			$(".food").append($(".innerbaby").clone());
			foodfill = true;
		}
	})
});