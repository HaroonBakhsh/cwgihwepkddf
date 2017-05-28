(function(){

	var link,
		toggleScrollTopLink = function(){


		if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			link.fadeIn(400);

			{
				else{
					link.fadeOut(400)
				}
			}

		};

	$(document).ready(function(){
		
		link = $(".ScrollTop");

		$(window).scroll(toggleScrollTopLink);

		toggleScrollTopLink();

	});

}());