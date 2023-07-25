// window.alert("Hello")    //Test




$(function () {
	let scroll = $(document).scrollTop();
	let navHeight = $('.navbar').outerHeight();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();

		if (scrolled > navHeight) {
			$('.navbar').addClass('animate');
		} else {
			$('.navbar').removeClass('animate');
			$('.navbar').removeClass('sticky');

		}

		if (scrolled > scroll) {
			$('.navbar').removeClass('sticky');

		} else {
			$('.navbar').addClass('sticky');
		}
		scroll = $(document).scrollTop();
	});
});


// let aboutOffsetTop = $("#about").offset().top;	// topبطول ب ال aboutده بيجيب المسافه م بين اول الموقع و ال offset

$(window).scroll(function () {	// scroll يعمل userانا كده بقول لم ال 
    let wScroll = $(window).scrollTop();

    if (wScroll > 100) {	// main-nav بتاع backgroundColorغير ال aboutOffsetTop ويوصل scroll انا كده بقول لم يعمل 
        $(".navbar").css("backgroundColor", "rgba(142, 119, 84,0.9)");
    }
    else {	// transparent ولم يطلع تاني اعمل 
        $(".navbar").css("backgroundColor", "transparent");

    }
})
























