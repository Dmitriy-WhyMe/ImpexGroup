(function ($) {
	$(document).ready(function () {
		$('#call').magnificPopup({
			type: 'inline'
		});
		$('#apply').magnificPopup({
			type: 'inline'
		});
		$('#apply-1').magnificPopup({
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


		$('.about__video-link').click(function(){
			var volume = $(this);
			volume.toggleClass('on');
			$(".about__wrapper").css("display", "none");
			$('#video').attr('controls', 'true');
			$('video').trigger('play');
		});

		$("#menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			var result = top - 185;
			$('body,html').animate({scrollTop: result}, 1500);
		});
		$("#nav").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			var result = top - 185;
			$('body,html').animate({scrollTop: result}, 1500);
		});
		$(".sizes__left").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			var result = top - 185;
			$('body,html').animate({scrollTop: result}, 1500);
		});
		$(".go-top").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			var result = top - 185;
			$('body,html').animate({scrollTop: result}, 1500);
		});



		$('#call').submit(function() {
			$.ajax({
			  type: "POST",
			  url: "../form-call.php",
			  data: $(this).serialize()
			}).done(function() {
			  $.magnificPopup.open({
				items: {
				  src: '#thanks-popup'
				}
			  });
			  $(this).find('input').val('');
			  $('#form-call-calc').trigger('reset');
			});
			return false;
		});
		$('#apply').submit(function() {
			$.ajax({
			  type: "POST",
			  url: "../form-apply.php",
			  data: $(this).serialize()
			}).done(function() {
			  $.magnificPopup.open({
				items: {
				  src: '#thanks-popup'
				}
			  });
			  $(this).find('input').val('');
			  $('#form-call-calc').trigger('reset');
			});
			return false;
		});
		$('#help').submit(function() {
			$.ajax({
			  type: "POST",
			  url: "../form-help.php",
			  data: $(this).serialize()
			}).done(function() {
			  $.magnificPopup.open({
				items: {
				  src: '#thanks-popup'
				}
			  });
			  $(this).find('input').val('');
			  $('#form-call-calc').trigger('reset');
			});
			return false;
		});
	});
})(jQuery);