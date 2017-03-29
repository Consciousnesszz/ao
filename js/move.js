;$(function(){

	$("#classify").click(function(){
		if ($(".subnav-wrap").css("display") === "block") {
			$(".subnav-wrap").hide();
		}else{
			$(".subnav-wrap").show();
<<<<<<< HEAD
			$(".subnav-wrap").css("left", parseInt($(".header").css("marginLeft")));
=======
>>>>>>> be255ba55f6fa288cae1aa0629f3da4f6e2b94bb
		}
	});
	
	/*---------banner导航----------*/
<<<<<<< HEAD
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
=======
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
>>>>>>> be255ba55f6fa288cae1aa0629f3da4f6e2b94bb

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