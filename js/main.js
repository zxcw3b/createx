$(function () {
	var mixer = mixitup('.directions__list');

	$('.directions__filter-btn').on('click', function () {
		$('.directions__filter-btn').removeClass('directions__filter-btn--active')
		$(this).addClass('directions__filter-btn--active')
	})

	$('.team__slider').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		Infinite: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					dots: true,
					appendDots: $('.team__dots')
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					dots: true,
					appendDots: $('.team__dots')
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					dots: true,
					appendDots: $('.team__dots'),
				}
			}
		]
	})
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

	$('.testi__slider').slick({
		arrows: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		Infinite: true,
		dots: true,
		appendDots: $('.testi__dots'),
		responsive: [
			{
				breakpoint: 650,
				settings: {
					arrows: false
				}
			}
		]
	})
	$('.testi__prev').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickPrev')
  })
  $('.testi__next').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickNext')
  })

		// =======ACCORDEON WHERE EVERY ELEMENTS IS SHOW WHEN ITS CLICKED==========
		// $('.program__acc-link').on('click', function (e) {
		// e.preventDefault()
		// $(this).toggleClass('program__acc-link--active')
		// $(this).children('.program__acc-text').slideToggle()
		// })

		// =======ACCORDEON WHERE EVERY ELEMENTS IS HIDE WHEN ONE IS CLICKED==========
	$('.program__acc-link').on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('program__acc-link--active')) {
			$(this).removeClass('program__acc-link--active')
			$(this).children('.program__acc-text').slideUp()
		} else {
			$('.program__acc-link').removeClass('program__acc-link--active')
			$('.program__acc-text').slideUp()
			$(this).addClass('program__acc-link--active')
			$(this).children('.program__acc-text').slideDown()
		}
	})

	$(".header__nav-list a, .header__top-btn, .footer__go-top, .footer__logo").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
		e.preventDefault()
        //забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь+ к топу можно добавить в пикселях насколько можно перемещать от блока вверх со знаком "-" или вниз
            top = $(id).offset().top - 50
        //анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500)
	});

		// =======BURGER FUNCT==========

		setInterval(() => {
			if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
				$('.burger').addClass('burger--follow')
			} else {
				$('.burger').removeClass('burger--follow')
			}
		}, 0);
		$('.burger, .overlay, .header__top a').on('click', function (e) {
			e.preventDefault()
			$('.header__top').toggleClass('header__top--open')
			$('.overlay').toggleClass('overlay--show')
		});

		$('.burger').on('click', function (e) {
			e.preventDefault()
			$('.burger').toggleClass('burger--open')
			$('.burger').toggleClass('burger--close')
		})

// =======FOOTER ACC==========

		$('.footer__top-title--slide').on('click', function () {
			$(this).next().slideToggle()
		})

})
