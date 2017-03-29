;$(function(){
	/*----------轮播---------*/
	var timer = null,
		isChanging = false,
		nowIndex = 0,
		nextIndex = 1;
	function change(){
		$($("#pic li")[nowIndex]).fadeOut(500);
		$($("#pic li")[nextIndex]).fadeIn(500);
		$($("#circle li")[nowIndex]).css("background","rgba(255,255,255,0.6)");
		$($("#circle li")[nextIndex]).css("background","rgba(255,255,255,1)");

		nowIndex = nextIndex;
		nextIndex++;
	}

	function move(){
		clearInterval(timer);
		timer = setInterval(function(){
			change();
			if (nextIndex > 4) {
				nextIndex = 0;
			}
		},1500);
	}
	move();
	$("#circle li").hover(function(){
		clearInterval(timer);
		nextIndex = $(this).index();
		change();
	},function(){
		setTimeout(function(){
			move();
		},500)
	});
})