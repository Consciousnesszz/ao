;$(function(){
	var userinfo = $.cookie("username");
	var userarr = userinfo.split("?");
	var num = parseInt(userarr[1]);
	$(".pronum").val(num);

	var price = parseFloat($(".proprice").text().slice(1));
	var tax = parseFloat($(".tag .tax").text().slice(1));
	$(".countp .red").text("￥" + (price * num).toFixed(2));
	$(".should .red").text("￥" + (price * num).toFixed(2));
	$(".discript .count").text("￥" + (price * num).toFixed(2));
	$(".discript .tax").text("￥" +( tax * num).toFixed(2));
	$(".countall").text("￥" + ((price + tax) * num).toFixed(2));

	/*------change amount--------*/
	$("#minus").click(function(){
		num = $(".pronum").val();
		if (num <= 1) {
			return
		}else{
			num--;
			$(".pronum").val(num);
			$(".right li .orange").text(num);
			userarr.splice(1,1,num);
			userinfo = userarr.join("?");
			$.cookie("username", userinfo, { expires: 10, path: '/' });
			$(".countp .red").text("￥" + (price * num).toFixed(2));
			$(".should .red").text("￥" + (price * num).toFixed(2));
			$(".discript .count").text("￥" + (price * num).toFixed(2));
			$(".discript .tax").text("￥" +( tax * num).toFixed(2));
			$(".countall").text("￥" + ((price + tax) * num).toFixed(2));

		}
	})
	$("#add").click(function(){
		num = $(".pronum").val();
		num++;
		$(".pronum").val(num);
		$(".right li .orange").text(num);
		userarr.splice(1,1,num);
		userinfo = userarr.join("?");
		$.cookie("username", userinfo, { expires: 10, path: '/' });
		$(".countp .red").text("￥" + (price * num).toFixed(2));
		$(".should .red").text("￥" + (price * num).toFixed(2));
		$(".discript .count").text("￥" + (price * num).toFixed(2));
		$(".discript .tax").text("￥" +( tax * num).toFixed(2));
		$(".countall").text("￥" + ((price + tax) * num).toFixed(2));

	})
	$(".pronum").focus(function(){
		num = $(".pronum").val();
	})
	$(".pronum").blur(function(){
		if (isNaN($(".pronum").val())) {
			$(".pronum").val(num);
		}else{
			num = $(".pronum").val();
			$(".right li .orange").text(num);
			userarr.splice(1,1,num);
			userinfo = userarr.join("?");
			$.cookie("username", userinfo, { expires: 10, path: '/' });
			$(".countp .red").text("￥" + (price * num).toFixed(2));
			$(".should .red").text("￥" + (price * num).toFixed(2));
			$(".discript .count").text("￥" + (price * num).toFixed(2));
			$(".discript .tax").text("￥" +( tax * num).toFixed(2));
			$(".countall").text("￥" + ((price + tax) * num).toFixed(2));

		}
	})
})