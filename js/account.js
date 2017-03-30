;$(function(){

	/*-------welcome-------*/
	if ($.cookie("username") != "null" && $.cookie("username") != undefined) {
		$(".welcome").hide();
		var userinfo = $.cookie("username"),
			userarr = [],
			username = "",
			amount = 0;
		userarr = userinfo.split("?");
		username = userarr[0];
		amount = userarr[1];
		$(".hello span").text("欢迎你，" + username);
		$(".headerg .right .orange").text(amount);
		$(".aside .num").text(amount);
		$(".hello").show();
	}
	$("#exit").click(function(){
		$.cookie("username", null, { path: '/', expires: 10});
		$(".hello").hide();
		$(".welcome").show();
		if ($(".welcome").length === 0) {
			window.location.href = "login.html";
		}
	})
	$(".aside div").click(function(){
		if ($.cookie("username") == "null") {
			alert("你还没有登录哟");
		}else{
			var loc = "car.html"
			var xml = new XMLHttpRequest();
			xml.open("GET",loc,false);
			xml.send();
			if (xml.status === 404) {
				window.location.href = "html/car.html";
			}else{
				window.location.href = loc;
			}
		}
	})

	/*-------------precenter-----------------*/

	$(".percenter").hover(function(){
		$(".percenter").css("background", "#fff");
		$(".perhide").slideDown(300);
	},function(){
		$(".percenter").css("background", "#f5f5f5");
		$(".perhide").slideUp(300);
	})
})