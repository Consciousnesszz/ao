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

	/*---------banner导航----------*/
	$("#baby").hover(function(){
		$("#forbaby").show();
	},function(){
		$("#forbaby").hide();
	})
	$("#makeup").hover(function(){
		$("#formakeup").show();
	},function(){
		$("#formakeup").hide();
	})
	$("#home").hover(function(){
		$("#forhome").show();
	},function(){
		$("#forhome").hide();
	})
	$("#food").hover(function(){
		$("#forfood").show();
	},function(){
		$("#forfood").hide();
	})
	$("#bag").hover(function(){
		$("#forbag").show();
	},function(){
		$("#forbag").hide();
	})
	$("#car").hover(function(){
		$("#forcar").show();
	},function(){
		$("#forcar").hide();
	})

	/*-------------everydaynav---------------*/
	$("#everydaynav li").hover(function(e){
		$("#everydaynav li").css({
			color: "#666"
		});
		$(this).css({
			color: "#ff442a",
            fontWeight: "bold"
		});
		var thisleft = 65 + $(this).position().left + "px";
		$("#triangle").css("left",thisleft);
	},function(){
		$("#everydaynav li").css({
			color: "#666"
		});
		$($("#everydaynav li")[0]).css({
			color: "#ff442a",
            fontWeight: "bold"
		})
		$("#triangle").css("left","65px");
	})

	/*-------------brandhover------------*/
	$("#country li").mouseenter(function(){
			$("#country li").removeClass("orange");
			$(this).addClass("orange");
	})
})