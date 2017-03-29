;$(function(){

	$("#classify").click(function(){
		if ($(".subnav-wrap").css("display") === "block") {
			$(".subnav-wrap").hide();
		}else{
			$(".subnav-wrap").show();
			$(".subnav-wrap").css("left", parseInt($(".header").css("marginLeft")));
		}
	});
	
	/*---------banner导航----------*/
	var setTimer = null;
	function showhide(ele1, ele2){
		$(ele1).hover(function(){
			$(ele2).show();
		},function(){
			setTimer = setTimeout(function(){
				$(ele2).hide();
			},300);
			$(ele2).hover(function(){
				clearTimeout(setTimer);
				$(ele2).show();
			},function(){
				$(ele2).hide();
			});
		})
	}
	showhide("#baby", "#forbaby");
	showhide("#makeup", "#formakeup");
	showhide("#home", "#forhome");
	showhide("#food", "#forfood");
	showhide("#bag", "#forbag");
	showhide("#car", "#forcar");

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