$(function(){
	$("#addr").click(function(){
		/*------------style----------*/
		$(this).css({
			'border-bottom' : "none",
			'padding-bottom' : "1px"
		});
		$("#addr-select").css("display","block");
		$(".cinfo0").parent().css({
			"color":"#000",
			"background":"#fff",
			"height":"25px"
		});
		$(".cinfo1").parent().css("display", "none");
		$(".cinfo2").parent().css("display", "none");

		$(".addr-options1").css("display","none");
		$(".addr-options2").css("display","none");

		/*------------切换选项卡-----------*/
		function resetLi(){
			$(".piecenav li").css({
				"color":"#ccc",
				"background":"transparent",
				"height":"24px"
			})
			$(".addr-options0").css("display","none");
			$(".addr-options1").css("display","none");
			$(".addr-options2").css("display","none");
		}
		$(".cinfo0").click(function(){
			resetLi();
			$(this).parent().css({
				"color":"#000",
				"background":"#fff",
				"height":"25px"
			});
			$(".addr-options0").css("display","block");
		})
		$(".cinfo1").click(function(){
			resetLi();
			$(this).parent().css({
				"color":"#000",
				"background":"#fff",
				"height":"25px"
			});
			$(".addr-options1").css("display","block");
		})
		$(".cinfo2").click(function(){
			resetLi();
			$(this).parent().css({
				"color":"#000",
				"background":"#fff",
				"height":"25px"
			});
			$(".addr-options2").css("display","block");
		})
		
		var  htmlpriv = "";
		/*------------get----------*/
		$.get("../json/addr.json",function(data){
			console.log(data);
			var htmlcity = "",
				city = {},
				area = {};
			if (htmlpriv === "") {
				for(var i = 1, len = data.length; i < len; i++){
					if (data[i].name === $(".cinfo0").text()) {
						htmlpriv += "<li><span style='background: #4e4eda;'>" + data[i].name + "</span></li>";
					}else{
						htmlpriv += "<li><span>" + data[i].name + "</span></li>";
					}
					city[data[i].name] = data[i].sub;
				}
				$(".addr-options0").empty().append(htmlpriv);
			}
			$(".addr-options0").css("display","block");
			$(".addr-options1").css("display","none");
			$(".addr-options2").css("display","none");
			console.log(city);

			/*----------------options0 的点击事件---------------*/
			$(".addr-options0 li").click(function(){
				// 设置点击提示
				$(".addr-options0").find("span").css("background", "#fff");
				$(this).children().css("background", "#4e4eda");

				// 替换选项卡文本
				var clientCity = $(this).find("span").text();
				$(".cinfo0").text(clientCity);
				
				// 替换选项文本
				htmlcity = "";
				for(var j = 1, len = city[clientCity].length; j < len; j++){
					if (j === 1) {
						htmlcity += "<li><span style='background: #4e4eda;'>" + city[clientCity][j].name + "</span></li>";
					}else{
						htmlcity += "<li><span>" + city[clientCity][j].name + "</span></li>";
					}
					area[city[clientCity][j].name] = city[clientCity][j].sub;
				}
				console.log(area);
				if (area[city[clientCity][1].name] === undefined) {
					$(".cinfo1").parent().css("display", "block");
					$(".cinfo1").text(clientCity + "市");
					$(".cinfo1").unbind("click");
					$(".cinfo2").parent().css("display", "block");
					$(".cinfo2").text(city[clientCity][1].name);
					resetLi();
					$(".cinfo2").css({
						"color":"#000",
						"background":"#fff",
						"height":"25px"
					});
				}else{
					$(".cinfo1").parent().css("display", "block");
					$(".cinfo1").text(city[clientCity][1].name);
					resetLi();
					$(".cinfo1").css({
						"color":"#000",
						"background":"#fff",
						"height":"25px"
					});
				}
				$(".addr-options0").css("display","none");
				$(".addr-options1").css("display","block");
				$(".addr-options1").empty().append(htmlcity);

				/*-----------options1 的点击事件----------*/
				if (area[city[clientCity][1].name] === undefined) {
					$(".addr-options1 li").click(function(){
						$(".cinfo2").text($(this).children().text());
						update();
						return;
					})
				}else{
					$(".addr-options1 li").click(function(){
						var htmlarea = "";
						$(".cinfo1").text($(this).children().text());
						$(".cinfo2").parent().css("display", "block");
						$(".cinfo2").text(area[$(this).children().text()][1].name);
						resetLi();
						$(".cinfo2").css({
							"color":"#000",
							"background":"#fff",
							"height":"25px"
						});

						for(var l = 1, len = area[$(this).children().text()].length; l < len; l++){
							if (l === 1) {
								htmlarea += "<li><span style='background: #4e4eda;'>" + area[$(this).children().text()][1].name + "</span></li>";
							}else{
								htmlarea += "<li><span>" + area[$(this).children().text()][l].name + "</span></li>";
							}
						}
						$(".addr-options2").empty().append(htmlarea);
						$(".addr-options2").css("display", "block");

						$(".addr-options2 li").click(function(){
							$(".cinfo2").text($(this).children().text());
							update();
						})
					})
				}
				

				/*-----------更新地址栏-----------*/
				function update(){
					$("#addr-select").css("display", "none");
					$(".info0").text($(".cinfo0").text());
					$(".info1").text($(".cinfo1").text());
					$(".info2").text($(".cinfo2").text());
				}
			})
		},"json")


	})
	$(".close").click(function(){
		$("#addr").css({
			'border-bottom' : "1px solid #ddd",
			'padding-bottom' : "0"
		});
		$("#addr-select").css("display","none");
	})
})