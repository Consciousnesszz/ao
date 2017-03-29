;$(function(){

	$("#classify").click(function(){
		if ($(".subnav-wrap").css("display") === "block") {
			$(".subnav-wrap").hide();
		}else{
			$(".subnav-wrap").show();
		}
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