;$(function(){
	/*-----------hottemp--------------*/
	var product1 = {
		img : '1.jpeg',
		title : 'FURLA/芙拉 2017年新款杨紫同款 女士牛皮时尚单肩斜挎链条包',
		para : '在时尚界，芙拉Furla也许倍受许多名媛淑女的推崇，女明星伊莉莎白·赫莉和Ruby Wax都很喜欢Furla的皮包。美国前任第一夫人劳拉·布什在出访时，也手挽着黑色Furla Chelsea绅包。芙拉 (Furla) 以优良品质见称，吸引讲潮流',
		sellNum : '30',
		priceNow : '1460.00',
		priceBef : '2500.00'
	}, product2 = {
		img : '2.jpeg',
		title : '卡西欧G-SHOCK系列 GA-110GB-1APR 大盘双显黑金多功能防水防震潮流运动男表',
		para : '将象征“坚韧“的G-shock元素融入手表设计中，传递坚韧精神的同时，更传达潮流与运动融合的魅力',
		sellNum : '58',
		priceNow : '1192.00',
		priceBef : '1490.00'
	}, product3 = {
		img : '3.jpeg',
		title : '【人气推荐】CPB/肌肤之钥 钻光隔离霜 妆前乳 40g 防晒遮瑕 持久美肌',
		para : '打造通透细腻无暇美肌！肌肤色彩调控！提升粉底服帖度，修饰肤质粗糙，维持长时间靓丽妆感！SPF20 PA++含小分子玻尿酸，鱼胶原蛋白等多种营养成分，补水修护！特有的冰川矿色彩因子，有效调控肤色！让你的',
		sellNum : '18',
		priceNow : '419.00',
		priceBef : '660.00'
	}, product4 = {
		img : '4.jpeg',
		title : '【人气推荐】Biore/碧柔 水润保湿防晒乳 SPF50 50g*2支 cosme大赏 清爽不油腻 无需卸妆 海边户外 全身可用',
		para : '防晒中的0.01！碧柔含水清爽保湿乳液，日本COSME防晒部门获奖产品，轻薄到肌肤无负担，却让你从此不怕晒!Spf50+PA++++，360度防护，肌肤犹如躲进小屋!质地如水般轻薄，触之即化；透明质酸+柑橘精华，保证肌',
		sellNum : '30',
		priceNow : '99.00',
		priceBef : '276.00'
	}, product5 = {
		img : '5.jpeg',
		title : '【人气推荐】Opera/娥佩兰 Naturie薏仁水 爽肤水 500ml*2瓶  补水 美白保湿 控油修复',
		para : '娥佩兰美白薏仁水有很强的美白功效，同时使肌肤变得光滑，细腻，防止晒黑，改善肌肤干燥的情况，促进新陈代谢，面部化妆水，全身滋润水或敷面膜都非常好用，肌肤水嫩透白。透明质酸能滋润干燥角质，令肌肤润泽白皙；',
		sellNum : '68',
		priceNow : '75.00',
		priceBef : '195.00'
	}, product6 = {
		img : '6.jpeg',
		title : 'THERMOS/膳魔师 保温杯保冷杯 JNL-502 500ml 情侣多彩系列 超长保温保冷',
		para : '轻盈、简约、多彩、活力，够冷酷也不乏温度，有型有爱。有你的日子，连黑白色也变得炫眼夺目。健康、新鲜、安全，是任何时候都少不了的关键词！THERMOS（膳魔师）多彩系列情侣保温杯，持续高效保温保冷，炎夏送',
		sellNum : '1570',
		priceNow : '229.00',
		priceBef : '425.00'
	}, product7 = {
		img : '7.jpeg',
		title : '【人气推荐】Devondale/德运 全脂高钙成人奶粉 1kg*2 口感醇香',
		para : '德运来自澳大利亚天然牧场，隶属于澳洲知名的乳制品厂商MG。奶粉口感纯正，天然牛奶，不含任何食品添加剂和防腐剂。',
		sellNum : '817',
		priceNow : '129.00',
		priceBef : '198.00'
	}, product8 = {
		img : '10.jpeg',
		title : 'LAMY/凌美狩猎者Safari系列钢笔  亮黑色F笔尖  单支/组合装',
		para : 'LAMY 专为年轻人设计出大胆、特殊、有个性的笔款，充分展现出年轻人的勇气及活力，狩猎者系列采用ABS笔身，镀黑铜圈笔夹，独特的人体工学三角握环，书写顺畅流利，深具设计风格，是为畅销的热门笔款之一。',
		sellNum : '365',
		priceNow : '129.00',
		priceBef : '216.00'
	}, product9 = {
		img : '8.jpeg',
		title : 'Bellamy\'s 贝拉米有机婴儿奶粉1段 900g/罐（两罐装）',
		para : '',
		sellNum : '48',
		priceNow : '297.00',
		priceBef : '536.00'
	}, product10 = {
		img : '9.jpeg',
		title : 'ICA 45%混合水果燕麦片 750g*2 浓香四溢',
		para : '入口即溶的酸奶球、酸酸甜甜的水果干、香浓酥脆的玉米片，还有甜甜的脆脆燕麦团，可以直接当零食吃，一勺送进嘴里，甜香可口，也可以按照瑞典传统的吃法，加酸奶和牛奶口味也很不错。一碗ICA酸奶蓝莓燕麦片，让你匆忙',
		sellNum : '278',
		priceNow : '78.00',
		priceBef : '105.00'
	}
	var data = {
		list: [product1, product2,product3,product4,product5,product6,product7,product8,product9,product10]
	}
	var html = template('hottem', data);
	$("#hotcontent").html(html);
	
	/*-----------floottemp----------------*/

	var motherfill = false,
		beautyfill = false,
		perfumefill = false,
		personalfill = false,
		bagfill = false,
		diamondfill = false,
		foodfill =  false;
	$(window).scroll(function(e){
		e = e || event;
		var top = $("body").scrollTop();
		if (!motherfill && top >= $(".baby").offset().top) {
			$(".mother").append($(".innerbaby").clone());
			motherfill = true;
		}
		if (!beautyfill && top >= $(".baby").offset().top) {
			$(".beauty").append($(".innerbaby").clone());
			beautyfill = true;
		}
		if (!perfumefill && top >= $(".baby").offset().top) {
			$(".perfume").append($(".innerbaby").clone());
			perfumefill = true;
		}
		if (!personalfill && top >= $(".baby").offset().top) {
			$(".personal").append($(".innerbaby").clone());
			personalfill = true;
		}
		if (!bagfill && top >= $(".baby").offset().top) {
			$(".bag").append($(".innerbaby").clone());
			bagfill = true;
		}
		if (!diamondfill && top >= $(".baby").offset().top) {
			$(".diamond").append($(".innerbaby").clone());
			diamondfill = true;
		}
		if (!foodfill && top >= $(".baby").offset().top) {
			$(".food").append($(".innerbaby").clone());
			foodfill = true;
		}
	})

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
		end = Date.parse("2017/04/04"),
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
		if (sec%60 == 59) {
			min--;
			if (min%60 < 10) {
				$(".min").text("0" + min%60);
			}else{
				$(".min").text(min%60);
			}
			if (min%60 == 59) {
				hour--;
				$(".hour").text(hour);
			}
		}
	},1000);
});