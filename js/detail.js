;$(function(){
	$(".big").mouseenter(function(e){
		e = e || event;

		$("#move").show();
		$(".seebig").show();
		////////////////////////////////////
		var inleft = 0, intop = 0;
		if (e.clientX < $(".big").offset().left + $("#move").width() / 2) {
			inleft = 0;
		}else if(e.clientX > $(".big").offset().left + $(".big").width() - $("#move").width() / 2){
			inleft = $(".big").offset().left + $(".big").width() - $("#move").width() / 2;
		}
		if (e.clientY < $(".big").offset().top + $("#move").height() / 2) {
			intop = 0;
		}else if(e.clientY > $(".big").offset().top + $(".big").height() - $("#move").height() / 2){
			intop = $(".big").offset().top + $(".big").height() - $("#move").height() / 2;
		}
		
		$("#move").css({
			top : intop + "px",
			left : inleft + "px"
		});

		var _left = e.pageX - $("#move").offset().left,
			_top = e.pageY - $("#move").offset().top;

		$(".big").mousemove(function(e){
			e = e || event;

			var mL = e.pageX - _left - $(".big").offset().left,
				mT = e.pageY - _top - $(".big").offset().top;

			if (mL <= 0) {
				mL = 0;
			}
			if (mL >= $(".big").width() - $("#move").width()) {
				mL = $(".big").width() - $("#move").width();
			}
			if (mT <= 0) {
				mT = 0;
			}
			if (mT >= $(".big").height() - $("#move").height()) {
				mT = $(".big").height() - $("#move").height();
			}

			$("#move").css({
				left : mL + "px",
				top : mT + "px"
			})

			$(".seebig").css({
				backgroundPositionX : - mL * 2 + "px",
				backgroundPositionY : - mT * 2 + "px"
			})
		})

		$(".big").mouseleave(function(e){
			e = e || event;
			$("#move").unbind("mousemove");
			$("#move").hide();
			$(".seebig").hide();
		})
	})
})
