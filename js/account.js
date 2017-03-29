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
			window.location.href = "html/car.html";
		}
	})
})