;$(function(){
	var html = template('test');
	$("#hotcontent").html(html);
	for(var i = 0; i < 9; i++){
		$("#hotcontent").append($($(".innerhot")[0]).clone());
	};
});