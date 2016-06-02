$(document).ready(function(){
	$("#tabs").tabs({
		event: "mouseover"
	});
	//Changes image whenever the document is clicked
	$(document).click(function(){
		var src = $("img").attr('src');
		$("img").attr('src', $("img").attr('data-alt-src'));
		$("img").attr('data-alt-src', src);
	});
});


