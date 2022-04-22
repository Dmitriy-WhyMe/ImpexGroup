(function ($) {
	$(document).ready(function () {
		$('#call').magnificPopup({
			type: 'inline'
		});
		$('#apply').magnificPopup({
			type: 'inline'
		});
		$('#thanks').magnificPopup({
			type: 'inline'
		});

		$('input[type="tel"]').inputmask({
			mask: "+7 ([9][9][9]) [9][9][9]-[9][9]-[9][9]",
			greedy: false
		});

		var e = jQuery(".top-btn"),
        r = jQuery(".header"),
        s = jQuery(".nav");
		jQuery(window).scroll(function () {
			500 < jQuery(window).scrollTop() ? (e.addClass("show"), r.addClass("fixed"), s.addClass("fixed-nav")) : (e.removeClass("show"), r.removeClass("fixed"), s.removeClass("fixed-nav"));
		});
	});
})(jQuery);