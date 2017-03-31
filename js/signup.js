;$(function(){
	var account = "",
		password = "",
		email = "",
		val = "";

	$("#phone input").blur(function(){
		val = $(this).val();
		if (val.length < 6 || val.length >20) {
			$("#phone .notice").text("请输入至少6个字符");
			$("#phone .notice").show();
			$(this).css("borderColor", "#ff337e")
		}else{
			$.get("../php/user.php", {account : val}, function(data){
				if (data.status === 0) {
					$("#phone .notice").hide()
					$("#hide").show();
					$("form").css("height","600px");
					$("#phone input").css("borderColor", "#3ea");
					account = val;
				}else{
					$("#phone .notice").text("账号已经注册");
					$("#phone .notice").show();
					$(this).css("borderColor", "#ff337e")
				}
			})
			
		}
	});
	$("#pass input").blur(function(){
		val = $(this).val();
		if (val.length < 6 || val.length >20) {
			$("#pass .notice").show();
			$("#pass input").css("borderColor", "#ff337e")
		}else{
			$("#pass .notice").hide();
			$("#pass input").css("borderColor", "#3ea");
			password = val;
		}
	})
	$("#spass input").blur(function(){
		val = $(this).val();
		if (val !== password && val != "") {
			$("#spass .notice").show();
			$("#spass input").css("borderColor", "#ff337e")
		}else{
			$("#spass .notice").hide();
			$("#spass input").css("borderColor", "#3ea");
		}
	})
	var re = /^\w+@\w+\.[a-z]+$/;
	$("#email input").blur(function(){
		val = $(this).val();
		if (!re.test(val)) {
			$("#email .notice").show();
			$("#email input").css("borderColor", "#ff337e")
		}else{
			$("#email .notice").hide();
			$("#email input").css("borderColor", "#3ea");
			email = val;
		}
	})

	var num = parseInt(Math.random() * 10000);
	$(".foridcode").text(num);
	$("#idcode input").blur(function(){
		val = $(this).val();
		if (val != num) {
			$("#idcode input").css("borderColor", "#ff337e")
		}else{
			$("#idcode input").css("borderColor", "#3ea");
		}
	})

	var issend = false;
	$("#checkemail a").click(function(){
		if (!issend) {
			issend = true;
			var i = 60;
			$("#checkemail a").text("再次发送 " + i);
			$("#checkemail a").css("background","#ff992e");
			var timer = setInterval(function(){
				i--;
				if (i <= 0) {
					clearInterval(timer);
					issend = false;
					$("#checkemail a").text("获取邮箱验证码");
					$("#checkemail a").css("background","#ffba00");
				}else{
					$("#checkemail a").text("再次发送 " + i);
				}
			},1000)
		}
	})
	$("#checkemail input").blur(function(){
		val = $("#checkemail input").val()
		if (val !== "") {
			$("#checkemail input").css("borderColor", "#3ea");
		}else{
			$("#checkemail input").css("borderColor", "ff337e");
		}
	})

	/*---------------提交验证----------------*/
	$("#btn").click(function(e){
		e = e || event;
		e.preventDefault();
		if (account.length < 1) {
			$("#phone .notice").show();
			$("#phone input").css("borderColor", "#ff337e");
			return;
		}else if(password.length < 1){
			$("#pass .notice").show();
			$("#pass input").css("borderColor", "#ff337e");
			return;
		}else if($("#spass input").val() !== password){
			$("#spass .notice").show();
			$("#spass input").css("borderColor", "#ff337e");
			return;
		}else if(!re.test(email)){
			$("#email .notice").show();
			$("#email input").css("borderColor", "#ff337e");
			return;
		}else if($("#idcode input").val() !== $(".foridcode").text()){
			$("#idcode input").css("borderColor", "#ff337e");
			return;
		}else if($("#checkemail input").val() === ""){
			$("#checkemail input").css("borderColor", "#ff337e");
			return;
		}else{
			$.post("../php/signup.php",{
				account : account,
				password : password,
				email : email
			});
			window.location("login.html");
		}
		
	})
});