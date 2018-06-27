const svgArrow = document.querySelectorAll('.order__list .arrow');

$(document).ready(function () {

    /* Resized paragraph [ */

    var resizedParagraph;

    //запишем в атрибут 'data-total_height оригинальную высоту каждого елемента
    function setHeight() {
        resizedParagraph = $('.review-text');
        for (var i = 0; i < resizedParagraph.length; i++) {
            var current = $(resizedParagraph[i]);
            current.css('height', '210px');
        }
    };
    setHeight();

    const tabMorning = document.querySelector('.tab-morning');
    const tabEvening = document.querySelector('.tab-evening');
    const sliderMorning = document.querySelector('.ingr-wrap__morning');
    const sliderEvening = document.querySelector('.ingr-wrap__evening');

    tabMorning.addEventListener('click', function () {
        tabEvening.classList.remove("ingr-active");
        tabMorning.classList.add("ingr-active");
        sliderEvening.classList.remove("ingr-active");
        sliderMorning.classList.add("ingr-active");

    });

    tabEvening.addEventListener('click', function () {
        tabMorning.classList.remove("ingr-active");
        tabEvening.classList.add("ingr-active");
        sliderMorning.classList.remove("ingr-active");
        sliderEvening.classList.add("ingr-active");
        var currentSlide = $('.ingr-wrap__evening').slick('slickCurrentSlide');
        console.log(currentSlide);
    });


    $('.ingr-wrap__morning').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
    });

    $('.ingr-wrap__evening').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
    });

    /*  Denys  */

    // section5 popup
    var more = '.more_popup',
        $infoButton = $(".more_info_btn"),
        $morePopup = $(more);

    $infoButton.on('click', function (event) {
        $(this).closest('.show_tea').find(more).toggleClass("more_popup_show");
        event.stopPropagation();
    });

    $('.section5').on('click', function (event) {
        if ($(event.target).closest(more).length > 0) {
            return;
        }

        $morePopup.removeClass('more_popup_show');

    });


// paralax

// $(window).mousemove(function(e) {
//     var change;
//     var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
//     var  xpos=xpos*2;ypos=ypos*2;
//     $('.list').css('top',((0+(ypos/50))+"px"));
//     $('.list').css('right',(( 0+(xpos/80))+"px"));

//   });

// $('.parallax-window').parallax({imageSrc: '../img/list1.png'});

    /*--------*/


    /*---------Max---------------*/

    $('.content__bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 0,
        infinite: false,
        centerMode: true,
        touchMove: false,
        draggable: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true
                }
            }
        ]

    });

    $('.content__bottom').on('afterChange', function (event, slick, currentSlide) {
        var curSlide = $('.content__bottom').slick('slickCurrentSlide');
        $('.top__item').removeClass('active');

        var clas = $('.top__item').eq(curSlide).hasClass('active');
        if (!clas) {
            $('.top__item').eq(curSlide).addClass('active');
        }
    });

    var curSlide = $('.content__bottom').slick('slickCurrentSlide');
    $('.top__item').eq(curSlide).addClass('active');


    $('.content__top .top__item').click(function () {
        var index = $(this).index();
        var clas = $('.top__item').eq(index).hasClass('active');
        $('.top__item').not(this).removeClass('active');
        $('.content__bottom').slick('slickGoTo', index);
        if (!clas) {
            $('.top__item').eq(index).addClass('active');
        }
    });


    $('.content__bottom').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var tablet = ($(window).width()) < 1024;
        var mob640 = ($(window).width()) < 639;
        var mobile = ($(window).width()) < 768;
        if (tablet && !mobile) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (currentSlide == 0 && nextSlide == 1) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 0 && nextSlide == 2) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 2 && nextSlide == 3) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 1 && nextSlide == 2) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 1 && nextSlide == 0) {
                $('.content__top').removeClass('active');
            } else if (currentSlide == 3 && nextSlide == 2) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            } else if (currentSlide == 3 && nextSlide == 1) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            } else if (currentSlide == 2 && nextSlide == 1) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            }
            else if (currentSlide == 1 && nextSlide == 0) {
                $('.content__top').removeClass('active');
            }
            /*else if (currentSlide == 2) {
             $('.content__top').addClass('active');
             } else if (currentSlide == 3) {
             $('.content__top').addClass('active');
             }*/
        } else if (mobile && !mob640) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (nextSlide == 0) {
                $('.content__top').addClass('active1');
            } else if (nextSlide == 1) {
                $('.content__top').addClass('active2');
            } else if (nextSlide == 2) {
                $('.content__top').addClass('active3');
            } else if (nextSlide == 3) {
                $('.content__top').addClass('active3');
            }
            /*else if (currentSlide == 2) {
             $('.content__top').addClass('active2');
             } else if (currentSlide == 3) {
             $('.content__top').addClass('active2');
             }*/
        } else if (mob640) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (nextSlide == 0) {
                $('.content__top').addClass('active1');
            } else if (nextSlide == 1) {
                $('.content__top').addClass('active2');
            } else if (nextSlide == 2) {
                $('.content__top').addClass('active3');
            } else if (nextSlide == 3) {
                $('.content__top').addClass('active4');
            }
        }


    });
    function setHeight() {
        resizedParagraph = $('.review-text');
        for (var i = 0; i < resizedParagraph.length; i++) {
            var current = $(resizedParagraph[i]);
            current.css('height', '130px');
        }
    };
    setHeight();


    function changeHeigth(button) {

        var block = $(button).parent().siblings('.review-text');
        var height = block[0].scrollHeight + 'px';
        // var beforeBlock = $(button).parent('.right-button');
        // console.dir(beforeBlock);

        if (!block.hasClass('auto_h')) {
            block.css('height', height);
        } else {
            block.css('height', '130px');
        }
        $(button).toggleClass('button180');
        block.toggleClass('auto_h');
        block.toggleClass('before-block');
    }

    $('.right-button').on('click', function () {
        console.log("Ura");
        changeHeigth(this);
    });

    $('.anchor').click(function () {
        let id = $(this).attr('href') ? $(this).attr('href') : $(this).attr('data-href'),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    /*----------------*/

});



