;$(function(){
<<<<<<< HEAD

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

=======

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

>>>>>>> a9a2d497f133e7022265ddfc635b98189962d9f5
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

<<<<<<< HEAD
=======
	/*--------------floors--------------*/
	var isMoving = false;
	function rehc(ele){
		$("#floors ul li").removeClass("hcurr");
		$(ele).addClass("hcurr");
	}
	$(window).scroll(function(){
		if ($("body").scrollTop() < $(".hot").offset().top + $(".hot").height()) {
			rehc($("#floors ul li")[0]);
		}else if($("body").scrollTop() < $(".daily").offset().top + $(".daily").height()){
			rehc($("#floors ul li")[1]);
		}else if($("body").scrollTop() < $(".brand").offset().top + $(".brand").height()){
			rehc($("#floors ul li")[2]);
		}else if($("body").scrollTop() < $(".baby").offset().top + $(".baby").height()){
			rehc($("#floors ul li")[3]);
		}else if($("body").scrollTop() < $(".mother").offset().top + $(".mother").height()){
			rehc($("#floors ul li")[4]);
		}else if($("body").scrollTop() < $(".beauty").offset().top + $(".beauty").height()){
			rehc($("#floors ul li")[5]);
		}else if($("body").scrollTop() < $(".perfume").offset().top + $(".perfume").height()){
			rehc($("#floors ul li")[6]);
		}else if($("body").scrollTop() < $(".personal").offset().top + $(".personal").height()){
			rehc($("#floors ul li")[7]);
		}else if($("body").scrollTop() < $(".bag").offset().top + $(".bag").height()){
			rehc($("#floors ul li")[8]);
		}else if($("body").scrollTop() < $(".diamond").offset().top + $(".diamond").height()){
			rehc($("#floors ul li")[9]);
		}else if($("body").scrollTop() < $(".food").offset().top + $(".food").height()){
			rehc($("#floors ul li")[10]);
		}


		if ($("body").scrollTop() >= $(".hot").offset().top && !isMoving) {
			isMoving = true;
			$("#floors").animate({
				left : "10px",
				opacity : 1
			},function(){
				isMoving = false;
			})
		}else if($("body").scrollTop() < $(".hot").offset().top && !isMoving){
			isMoving = true;
			$("#floors").animate({
				left : "-50px",
				opacity : 0
			},function(){
				isMoving = false;
			})
		}
	})


	$("#floors ul li").click(function(){
		var index = $(this).index();
		if (index === 0) {
			_top = $(".hot").offset().top + "px";
		}else if(index === 1){
			_top = $(".daily").offset().top + "px";
		}else if(index === 2){
			_top = $(".brand").offset().top + "px";
		}else if(index === 11){
			_top = 0;
		}else{
			_top = $(".brand").offset().top + $(".brand").height() + (index - 3)*600 + 50 + "px";
		}
		$("body").animate({
			scrollTop : _top
		},1000);
	})

	/*--------------timer--------------*/
	var date = new Date();
		now = date.getTime(),
		end = Date.parse("2017/04/02"),
		dif = end - now,
		hour = parseInt(dif/60000/60),
		min = parseInt(dif/60000),
		sec = parseInt(dif/1000);
	$(".hour").text(hour);

	if (min%60 < 10) {
		$(".min").text("0" + min%60);
	}else{
		$(".min").text(min%60);
	}

	if (sec%60 < 10) {
		$(".sec").text("0" + sec%60);
	}else{
		$(".sec").text(sec%60);
	}

	setInterval(function(){
		sec--;
		if (sec%60 < 10) {
			$(".sec").text("0" + sec%60);
		}else{
			$(".sec").text(sec%60);
		}
		if (sec%60 <= 0) {
			min--;
			if (min%60 < 10) {
				$(".min").text("0" + min%60);
			}else{
				$(".min").text(min%60);
			}
			if (min%60 <= 0) {
				hour--;
				$(".hour").text(hour);
			}
		}
	},1000);
>>>>>>> a9a2d497f133e7022265ddfc635b98189962d9f5
})