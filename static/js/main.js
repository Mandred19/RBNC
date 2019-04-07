$(document).ready(function () {
		svg4everybody({});

		// button scroll up
		const scrollUp = () => {
			$(document).ready( () => {
				let scrollHeigth = 500,   
						scrollTopDuration = 600,
						buttonUp = $('.button__scroll_up');
				$(window).scroll( () => {
					$(this).scrollTop() > scrollHeigth ? 
					buttonUp.addClass('button__scroll_up-active') :
					buttonUp.removeClass('button__scroll_up-active');
				});
				buttonUp.on('click', (event) => {
					event.preventDefault();
					$('body, html').animate( {scrollTop: 0}, scrollTopDuration );
				});
			});
		};

		// show location
		const showLocatSearch = () => {
			$('.js-popup-link-loc').magnificPopup({
				type: 'inline',
				focus: 'input',
				showCloseBtn: false,
				fixedContentPos: false,
				removalDelay: 200,
				preloader: false,
				overflowY: 'scroll',
				alignTop: true,
				callbacks: {
					beforeOpen: function () {
						$('body').addClass('magnific-popup-no-scroll');
					},
					close: function () {
						$('body').removeClass('magnific-popup-no-scroll');
					}
				}
			});
		};

		// show login
		const showLogReg = () => {
			$('.js-popup-link').magnificPopup({
				showCloseBtn: true,
				type: 'inline',
				focus: 'input',
				fixedContentPos: false,
				removalDelay: 200,
				preloader: false,
				overflowY: 'scroll',
				alignTop: true,
				callbacks: {
					beforeOpen: function () {
						$('body').addClass('magnific-popup-no-scroll');
					},
					close: function () {
						$('body').removeClass('magnific-popup-no-scroll');
					}
				}
			});
		};

		// toggle hamburger and menu-mobile
		const toggleHamburger = () => {
			let $hamb = $('.hamburger'),
					menu = $('.header__nav');
			$hamb.on('click', () => {
				$hamb.toggleClass('is-active');
				menu.toggleClass('header-nav-mobile-active');
			});
		};

		// toggle classes saidbars
		const showSaidbar = () => {
			$(document).ready( () => {
				let left = $('.saidbar-arrow-left'),
						right = $('.saidbar-arrow-right'),
						saidbarLeft = $('.for-us-page__saidbar-left'),
						saidbarRight = $('.for-us-page__saidbar-right');
				left.on('click', () => {
					saidbarLeft.toggleClass('for-us-page__saidbar-left-active');
					left.toggleClass('saidbar-arrow-left-active');
				});
				right.on('click', () => {
					saidbarRight.toggleClass('for-us-page__saidbar-right-active');
					right.toggleClass('saidbar-arrow-right-active');
				});
			});
		};

		// sticky menu
		const stickyMenu = () => {
			$(document).ready( () => {
					$(window).scroll( () => {
						if ($(this).scrollTop() >= 150) {
							$(".header-top").addClass("js-header-top-sticky");
						} else {
							$(".header-top").removeClass("js-header-top-sticky");
						}
					});
			});
		};

		// slider main page
		const sliderSlickMain = () => {
			$('.js-slider-main').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 860,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 320,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					}
				]
			});
		};

		// slider other pages
		const sliderSlickOther = () => {
			$('.js-slider-other').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '.slider-arrow-back',
				nextArrow: '.slider-arrow-next',
				cssEase: 'linear',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: true,
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 860,
						settings: {
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 320,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true
						}
					}
				]
			});
		};

		// slider face
		const sliderSlickOtherFace = () => {
			$('.js-slider-other--face').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '.slider-arrow-back',
				nextArrow: '.slider-arrow-next',
				cssEase: 'linear',
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							arrows: true,
							slidesToShow: 4,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 861,
						settings: {
							arrows: false,
							slidesToShow: 3,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 481,
						settings: {
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 321,
						settings: {
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 1,
							dots: true
						}
					}
				]
			});
		};

		// show gallery
		const showGallery = () => {
			$('.js-press-photo, .js-interest-block').magnificPopup({
				type: 'image',
				delegate: 'a',
				gallery:{
					enabled:true
				}
			});
		};

		// toggle classes with center in comitet
		const toggleNews = () => {
			$(document).ready( () => {
				let buttonCenter = $('.news__button-left'),
						buttonComitet = $('.news__button-right'),
						center = $('.news__center'),
						comitet = $('.news__comitet');
				buttonComitet.on('click', () => {
					center.addClass('news__center-hide');
					comitet.addClass('news__comitet-show');
				});
				buttonCenter.on('click', () => {
					comitet.removeClass('news__comitet-show');
					center.removeClass('news__center-hide');
				});
			});
		};

		// animation numbers
		const animNum = () => {
			$(document).ready( () => {
				let check = 1,
					target = $('.performance'),
					targetPos = target.offset().top,
					winHeight = $(window).height(),
					scrollToElem = targetPos - winHeight;
				$(window).scroll( () => {
					let winScrollTop = $(this).scrollTop();
					if (winScrollTop > scrollToElem && check) {
						$('.performance__group-num').each( function() {
							$(this).prop('Counter', -1).animate( { Counter: $(this).text() }, {
								duration: 4000,
								easing: 'swing',
								step: function(now) {
									$(this).text(Math.ceil(now) );
								}
							});
						});
						check = 0;
					}
				});
			});
		};
		
		scrollUp();
		showLocatSearch();
		showLogReg();
		toggleHamburger();
		sliderSlickMain();
		sliderSlickOther();
		showGallery();
		sliderSlickOtherFace();
		showSaidbar();
		toggleNews();
		stickyMenu();
		animNum();
		
});

// replase sity
const replaceSity = () => {
	let elem = document.getElementsByClassName('location-choice__sity'),
			result = document.getElementById('location-desc'),
			button = document.getElementById('location-button'),
			input = document.getElementById('location-choice');
	button.onclick = function() {
		result.innerHTML = input.value;
		input.value = '';
		return false;
	};
	for (let i = 0; i < elem.length; i++) {
		elem[i].onclick = function () {
			result.innerHTML = this.innerHTML;
			input.value = this.innerHTML;
			return false;
		};
	}
};

// shoice sity and other data
const changeContactsData = () => {
	let selectList = document.getElementById('js-select'),
			address = document.getElementById('js-address'),
			email = document.getElementById('js-email'),
			phone = document.getElementById('js-phone'),
			timeStr = document.getElementById('js-time-str'),
			timeNum = document.getElementById('js-time-num'),
			valueCoord = '';
	const towns = new Map ([
				['Санкт-Петербург', [
						'г. Санкт-Петербург ул. Марата, д.69',
						'st-peter-mail@rcdp.ru',
						'+7 (3815) 100-900'
					]
				],
				['Воронеж', [
						'г. Воронеж ул. Воронеж, д.100',
						'vor-mail@rcdp.ru',
						'+7 (3815) 200-500'
					]
				],
				['Ярославль', [
						'г. Ярославль ул. Ярославль, д.100',
						'yar-mail@rcdp.ru',
						'+7 (3815) 600-800'
					]
				],
				['Казань', [
						'г. Казань ул. Казань, д.100',
						'kaz-mail@rcdp.ru',
						'+7 (3815) 000-300'
					]
				],
				['Саратов', [
						'г. Саратов ул. Саратов, д.100',
						'sar-mail@rcdp.ru',
						'+7 (3815) 900-900'
					]
				],		
				['Ростов-на-Дону', [
						'г. Ростов-на-Дону ул. Ростов-на-Дону, д.100',
						'rost-mail@rcdp.ru',
						'+7 (3815) 300-500'
					]
				],		
				['Красноярск', [
						'г. Красноярск ул. Красноярск, д.100',
						'krasnya-mail@rcdp.ru',
						'+7 (3815) 900-500'
					]
				],		
				['Нижний Новгород', [
						'г. Нижний Новгород ул. Нижний Новгород, д.100',
						'nizh-nov-mail@rcdp.ru',
						'+7 (3815) 900-700'
					]
				],		
				['Челябинск', [
						'г. Челябинск ул. Челябинск, д.100',
						'chel-mail@rcdp.ru',
						'+7 (3815) 900-600'
					]
				],		
				['Екатеринбург', [
						'г. Екатеринбург ул. Екатеринбург, д.100',
						'ekat-mail@rcdp.ru',
						'+7 (3815) 100-800'
					]
				],		
				['Пермь', [
						'г. Пермь ул. Пермь, д.100',
						'perm-mail@rcdp.ru',
						'+7 (3815) 800-900'
					]
				],		
				['Новосибирск', [
						'г. Новосибирск ул. Новосибирск, д.100',
						'novosib-mail@rcdp.ru',
						'+7 (3815) 200-900'
					]
				],		
				['Краснодар', [
						'г. Краснодар ул. Краснодар, д.100',
						'krasn-mail@rcdp.ru',
						'+7 (3815) 300-900'
					]
				],		
				['Волгоград', [
						'г. Волгоград ул. Волгоград, д.100',
						'volg-mail@rcdp.ru',
						'+7 (3815) 500-100'
					]
				],		
				['Омск', [
						'г. Омск ул. Омск, д.100',
						'omsk-mail@rcdp.ru',
						'+7 (3815) 000-800'
					]
				],		
				['Якутск', [
						'г. Якутск ул. Якутск, д.100',
						'yak-mail@rcdp.ru',
						'+7 (3815) 000-400'
					]
				],		
				['Магадан', [
						'г. Магадан ул. Магадан, д.100',
						'mag-mail@rcdp.ru',
						'+7 (3815) 100-600'
					]
				]
			]);
	if ($('div').is('.contacts-map')) {
		ymaps.ready(init);
			function init() {
				var myMapMain = new ymaps.Map('map-main', {
								center: [55.712430, 37.597866],
								zoom: 14
						}, {
								searchControlProvider: 'yandex#search'
						}),
						myPlacemark = new ymaps.Placemark(myMapMain.getCenter(), {
						}, {
								iconLayout: 'default#image',
								iconImageHref: 'static/images/content/loc.png',
								iconImageSize: [30, 30]
						});
				myMapMain.geoObjects.add(myPlacemark);
				myMapMain.behaviors.disable('scrollZoom');
				myMapMain.controls.remove('trafficControl').remove('searchControl')
				.remove('typeSelector').remove('geolocationControl')
				.remove('rulerControl');
				var myMapOther = new ymaps.Map('map-other', {
								center: [51.536189, 46.028453],
								zoom: 4
						}, {
								searchControlProvider: 'yandex#search'
						}),
						sityCollection = new ymaps.GeoObjectCollection(null, {
								iconLayout: 'default#image',
								iconImageHref: 'static/images/content/loc.png',
								iconImageSize: [30, 30]
						}),
						sityCoords = [
							[59.921033, 30.343176],
							[51.652058, 39.189156],
							[57.6299420, 39.876888],
							[55.793444, 49.136435],
							[51.536189, 46.028453],
							[47.2272065, 39.735799],
							[56.0132605, 92.872954],
							[56.3134477, 43.999648],
							[55.175117, 61.440449],
							[56.8340337, 60.592365],
							[58.0108483, 56.250899],
							[55.0446509, 82.927285],
							[45.040093, 38.96164],
							[48.726335, 44.5009830],
							[54.995217, 73.368344],
							[62.031156, 129.720592],
							[59.5621638, 150.810558]
						],
						myPlacemark = new ymaps.Placemark(myMapOther.getCenter(), {
						}, {
								iconLayout: 'default#image',
								iconImageHref: 'static/images/content/loc.png',
								iconImageSize: [30, 30]
						});
						for (let i = 0; i < sityCoords.length; i++) {
							sityCollection.add(new ymaps.Placemark(sityCoords[i]));
						}
				myMapOther.geoObjects.add(sityCollection);
				myMapOther.geoObjects.add(myPlacemark);
				myMapOther.behaviors.disable('scrollZoom');
				myMapOther.controls.remove('trafficControl').remove('searchControl')
				.remove('typeSelector').remove('geolocationControl')
				.remove('rulerControl');
		};
	}
	const clickList = () => {
		let form = document.forms.formsity,
				select = form.elements.selectsity,
				valueOption = '',
				valueName = '';
		for (let i = 0; i < select.options.length; i++) {
			let option = select.options[i];
			if (option.selected) {
				valueOption = option.innerHTML;
				for (let name of towns.keys()) {
					if (valueOption === name) {
						valueName = towns.get(name).slice(0, 1).join('');
						address.innerHTML = valueName;
						valueName = towns.get(name).slice(1, 2).join('');
						email.innerHTML = valueName;
						valueName = towns.get(name).slice(2, 3).join('');
						phone.innerHTML = valueName;
						timeStr.innerHTML = 'Время работы';
						timeNum.innerHTML = 'пн - пт 9.00 : 18.00';
					}
				}
			}
		}
		return false;
	};
	selectList.addEventListener('change', clickList);
};

replaceSity();
changeContactsData();
