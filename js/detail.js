;$(function(){
	/*-----------glass-------------*/
	$(".big").mouseenter(function(e){
		e = e || event;

		$("#move").show();
		$(".seebig").show();

		var _left = e.pageX - $("#move").offset().left - $("#move").width() / 2,
			_top = e.pageY - $("#move").offset().top - $("#move").height() / 2;

		if (_left < 0) {
			_left = 0;
		}else if(_left > $(".big").width() - $("#move").width() / 2){
			_left = $(".big").width() - $("#move").width();
		}
		if (_top < 0) {
			_top = 0;
		}else if(e.clientY > $(".big").height() + $("#move").height() / 2){
			_top = $(".big").height() - $("#move").height();
		}

		$("#move").css({
			left : _left + "px",
			top : _top + "px"
		});

		$(".big").mousemove(function(e){
			e = e || event;

			var mL = e.pageX - $(".big").offset().left - $("#move").width() / 2,
				mT = e.pageY - $(".big").offset().top - $("#move").height() / 2;

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

	/*----------change pic------------*/
	$("#prev").click(function(){
		var _left = parseInt($(".small ul").css("left"));
		if (_left > 0) {
			return;
		}else{
			_left += 72;
			$(".small ul").css("left", _left);
			$($(".small li")[0]).addClass("curr");
			$($(".small li")[1]).removeClass("curr");
			$(".small i").css("left", parseInt($(".small i").css("left")) - 72);
			$(".big").html("<img src='../images/pen/1big.png'><div id='move'></div>");
			$(".seebig").css({
				background : "#fff url(../images/pen/1big.png) no-repeat",
				backgroundSize: "900px 900px"
			});
		}
	})
	$("#next").click(function(){
		var _left = parseInt($(".small ul").css("left"));
		if (_left < 28) {
			return;
		}else{
			_left -= 72;
			$(".small ul").css("left", _left);
			$($(".small li")[1]).addClass("curr");
			$($(".small li")[0]).removeClass("curr");
			$(".small i").css("left", parseInt($(".small i").css("left")) + 72);
			$(".big").html("<img src='../images/pen/2big.png'><div id='move'></div>");
			$(".seebig").css({
				background : "#fff url(../images/pen/2big.png) no-repeat",
				backgroundSize: "900px 900px"
			});
		}
	})

	$(".small li").click(function(){
		$(".small li").removeClass("curr");
		$(this).addClass("curr");
		var ileft = $(this).position().left + 24 + "px";
		$(".small i").css("left",ileft);
		$(".big").html("<img src='../images/pen/" + ($(this).index() + 1) + "big.png'><div id='move'></div>");
		$(".seebig").css({
			background : "#fff url(../images/pen/" + ($(this).index() + 1) + "big.png) no-repeat",
			backgroundSize: "900px 900px"
		});
	})

	$(".cright li").click(function(){
		$(".cright li").removeClass("set");
		$(this).addClass("set");
	})

	/*------change amount--------*/
	var proamount = 1;
	$("#minus").click(function(){
		proamount = $("#num").val();
		if (proamount <= 1) {
			return
		}else{
			proamount--;
			$("#num").val(proamount);
		}
	})
	$("#add").click(function(){
		proamount = $("#num").val();
		proamount++;
		$("#num").val(proamount);
	})
	$("#num").focus(function(){
		proamount = $("#num").val();
	})
	$("#num").blur(function(){
		if (isNaN($("#num").val())) {
			$("#num").val(proamount);
		}else{
			proamount = $("#num").val();
		}
	})

	/*----------buy-----------*/
	var userinfo = $.cookie("username"),
			userarr = [],
			username = "",
			amount = 0;
	$("#buynow").click(function(){
		if (userinfo) {
			userarr = userinfo.split("?");
			if (userarr.length === 1) {
				userinfo = userinfo + "?"+ proamount;
				$.cookie("username", userinfo, { expires: 10, path: '/' });
			}else{
				userarr[1] = parseInt(userarr[1]) + proamount;
				userinfo = userarr.join("?");
				$.cookie("username", userinfo, { expires: 10, path: '/' });
			}
			window.location.href = "config.html";
		}else{
			alert("你还没有登录哟");
		}
	})
	function incar(){
		if (userinfo) {
			userarr = userinfo.split("?");
			if (userarr.length === 1) {
				userinfo = userinfo + "?"+ proamount;
				$(".headerg .right .orange").text(proamount);
				$(".aside .num").text(proamount);
				$.cookie("username", userinfo, { expires: 10, path: '/' });
			}else{
				userarr[1] = parseInt(userarr[1]) + proamount;
				$(".headerg .right .orange").text(userarr[1]);
				$(".aside .num").text(userarr[1]);
				userinfo = userarr.join("?");
				$.cookie("username", userinfo, { expires: 10, path: '/' });
			}
		}else{
			alert("你还没有登录哟");
		}
	}
	$("#incar").click(function(){
		incar();
	})
	$(".red").click(function(){
		incar();
	})

	/*-----------topnav----------*/
	$(".prodetail").click(function(){
		$("body").animate({
			scrollTop:$(".guess").offset().top + $(".guess").height()
		},1000)
		$("#sucknav li").removeClass("click");
		$(this).addClass("click");
	})
	$(".proremark").click(function(){
		$("body").animate({
			scrollTop:$(".remark").offset().top
		},1000)
		$("#sucknav li").removeClass("click");
		$(this).addClass("click");
	})
	$(window).scroll(function(){
		console.log("123");
		var _top = $(".guess").offset().top + $(".guess").height();
		var _high = $("body").scrollTop();
		if (_high >= _top) {
			$("#sucknav").css({
				position: "fixed",
				top : 0,
				left : 0
			})
			$("#sucknav ol").show();
			$(".pic").css("marginTop", "44px");
		}else{
			$("#sucknav").css({
				position: "relative"
			})
			$("#sucknav ol").hide();
			$(".pic").css("marginTop", "0");
		}
	})
})
