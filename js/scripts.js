$(document).ready(function () {

	var grid = $(".grid_line");

	setTimeout(function(){
		grid.addClass("draw_line");
	}, 500);
	
	var social = $(".wrap_social");

	$(window).scroll(function () {
		if ($(document).scrollTop() > 800) {
			social.css("display", "none");
		} else {
			social.css("display", "block");
		}
	});
});