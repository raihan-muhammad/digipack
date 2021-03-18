'use strict';

$(document).ready(function () {
	new WOW().init();
	$('.lang').on('click', 'li', function () {
		$('.lang li.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.navbar-toggler').click(function () {
		$('.overlay').toggleClass('d-none');
	});
	$('.single-item').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		autoplay: true,
		arrows: false,
		dots: true,
	});
	$('.single-item-profile').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		autoplay: true,
		arrows: false,
		dots: true,
	});
	$('.multiple-items').slick({
		prevArrow:
			'<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:
			'<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 1,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	$('.instagram-slider').slick({
		prevArrow:
			'<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:
			'<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					autoplay: true,
					arrows: false,
					slidesToScroll: 1,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	$('.portfolio-slide').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		arrows: true,
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	});
});
//# sourceMappingURL=main.js.map
