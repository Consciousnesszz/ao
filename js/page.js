;$(function(){
	$(".bmw").hover(function(){
		$(".pro").css({
			width : "236px",
			height : "398px",
			border: "1px solid #ddd"
		});
		$(".hide").show();
	},function(){
		$(".pro").css({
			border: "none"
		});
		$(".hide").hide();
	})

	var userinfo = $.cookie("username"),
			userarr = [],
			username = "",
			amount = 0;
	$(".incar").click(function(){
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
	})
})