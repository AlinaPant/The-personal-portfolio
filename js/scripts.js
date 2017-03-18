$(document).ready(function () {
	
	var social = $(".wrap_social");

	$(window).scroll(function () {
		if ($(document).scrollTop() > 800) {
			social.css("display", "none");
		} else {
			social.css("display", "block");
		}
	});
});