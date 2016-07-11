$(document).ready(function(){
	$("#toequipment").on("tap",function(){
		$.mobile.changePage("#equipmentpage");
	});

	$(".flink a").css("height", $(".flink a").css("width"));

	var $liw = $(".ui-content").css("width");
	var $ul = $(".custom-ppt ul");
	var $lis = $(".custom-ppt ul li");
	$lis.css("width",$liw);/* 使单个li的宽度与最外层轮播图DIV宽度一致而不受UL宽度变化影响 */
	var $lisl = $lis.length;
	$ul.css({"width":($(".custom-ppt ul li").length)*100+"%"});/* 计算并设置ul包含全部li实际所需宽度 */
	function custom() {
		setInterval(function(){
			$ul.stop();
			$ul.animate({"left": "-" + parseInt($liw) + "px"}, 400 , "linear" , function(){
				$ul.children("li:first").insertAfter($ul.children("li:last"));
				$ul.css({"left":""});
			});
		},3000);
	}
	setTimeout(custom,10);
});
