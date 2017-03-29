$(function(){
	$("#account").blur(function(){
		$("#account").css("borderBottom", "2px solid #ff224e");
		$("#phone").css("borderBottom", "none");
		$(".hide").animate({
			left : "0"
		},500);
	});
	$("#phone").blur(function(){
		$("#account").css("borderBottom", "none");
		$("#phone").css("borderBottom", "2px solid #ff224e");
		$(".hide").animate({
			left : "-350px"
		},500);
	});
	$("#btn").click(function(e){
		e = e || event;
		e.preventDefault();
		var account = $(".account input").val(),
			password = $(".password input").val();
		if (account === "") {
			$(".account .notice").show();
			$(".account input").css("border", "1px solid #ff337e");
			return;
		}else if(password === ""){
			$(".password .notice").show();
			$(".password input").css("border", "1px solid #ff337e");
			return;
		}else{
			$.post("../php/login.php",{
				account : account,
				password : password
			},function(data){
				if (data.status === 1) {
					if ($.cookie("username") === account) {
						alert("你已经登录了哟");
						return;
					}else{
						$.cookie("username", account , { path: '/', expires: 10});
						window.location.href = "../index.html";
					}
				}else{
					alert("你的账户或密码有错误");
				}
			},"json")
		}
	})
});