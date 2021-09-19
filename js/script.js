$(function () {
    'use strict';

    // start use strict


    // animation 

    new WOW().init();

    // progress bar

    $('.circlechart').circlechart();


    // mignific popup

    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }

    });


    //partner_content slider
    $('.testimonial_whole').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        asNavFor: '.',
        asNavFor: '.testimonial_img',

    });

    //partner_content slider
    $('.testimonial_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        asNavFor: '.testimonial_whole',




    });



    //intro menu
    $('.intro_menu ul li').on('click', function () {
        $('.intro_menu ul li').removeClass('active');
        $(this).addClass('active');

    });

    // top tp bottom
    $('.toptobottom').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });

    });


    //menuTop
    var menuTop = $('.custom_nav').offset().top;

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();


        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_navfix');
        } else {
            $('.custom_nav').removeClass('custom_navfix');
        }

        if (scroll > 300) {
            $('.toptobottom').fadeIn(500);
        } else {
            $('.toptobottom').fadeOut(500);
        }

    });

    //menu part

    $('#mynav ul li').on('click', function () {
        $('#mynav ul li').removeClass('active');
        $(this).addClass('active');

    });

    //smooth scroll

    $("#mynav ul li a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });



    //color platte click

    $('.setting_icon').on('click', function () {
        $('.color_platte').toggleClass("rr");

    });


    // start warm color 1 -------------------====================


    //color platte colorrr -----------

    $('.color-1').on('click', function () {
        $('.footer_item h4,.single_bottom ul li i,.single_content h3,.footer_item h4,.cause_itemm h3,.partner_content i,.cause_itemm h5,.cause_itemm a,.common_part h4,.services_leftt .icon,.common_part h2,.about_right h4 ').css({
            "color": "#EE6363",

        });
    });


    //color platte btn -----------

    $('.color-1').on('click', function () {
        $(".btn1two,.services_leftt").hover(function () {
            $(this).css("background-color", "#EE6363");
        });

        $(".btn1two,.services_leftt").mouseleave(function () {
            $(this).css("background-color", "#fff");
        });
    });

    //color platte Background -----------

    $('.color-1').on('click', function () {
        $('.banner_content .btn1two:hover, .services_right .ratio_three,.head_overly h3:after,.common_parts h3:before,.common_part h3:before,.common_part h4:after,.about_right h4:after,.toptobottom i,.contact_button,.testimonial_whole .slick-dots li button,.Viwe_all a, .services_right .ratio_two, .services_leftt:hover, .services_right .ratio, .services_leftt a,.about_right a,.banner_content .btn1, .banner_content .btn1two:hover ').css({
            "background": "#EE6363",

        });
    });

    //color platte Circleee -----------

    $('.color-1').on('click', function () {
        $('.success-stroke').addClass("color-circle-1");
        $('.success-stroke').removeClass("color-circle-2");
        $('.success-stroke').removeClass("color-circle-4");
        $('.success-stroke').removeClass("color-circle-3");

    });

    //color platte Border -----------
    $('.color-1').on('click', function () {
        $('.banner_content .btn1two, .main_footer hr, .services_leftt, .services_left i,.banner_content .btn1, .banner_content .btn1two, .testimonial_img img').css({
            "border-color": "#EE6363",

        });
    });

    //color platte btn sercices -----------

    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.b1').css("background-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.b1').css("background-color", "#EE6363");
        });
    });

    $('.color-1').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.b2').css("background-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.b2').css("background-color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.b3').css("background-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.b3').css("background-color", "#EE6363");
        });
    });




    //color platte btn sercices -----------

    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });


        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#EE6363");
        });
    });

    // two 
    $('.color-1').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("border-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("border-color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("color", "#EE6363");
        });
    });
    // Three
    $('.color-1').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("border-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("border-color", "#EE6363");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("color", "#EE6363");
        });
    });

    $('.color-1').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.bi').css("color", "black");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.bi').css("color", "white");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.bii').css("color", "black");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.bii').css("color", "white");
        });
    });
    $('.color-1').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.biii').css("color", "black");
        });

        $(".services_leftta").mouseleave(function () {
            $('.biii').css("color", "white");
        });
    });

    // head overly

    $('.color-1').on('click', function (event) {
        $('.about_right h4').addClass('aboutt_right-other');
    });

    $('.color-1').on('click', function (event) {
        $('.common_part h4').addClass('commonn_part-other');

    });
    $('.color-1').on('click', function (event) {
        $('.portfolio_item').addClass('portfolioo_item-1');
        $('.portfolio_item').removeClass('portfolioo_item-2');
        $('.portfolio_item').removeClass('portfolioo_item-3');
        $('.portfolio_item').removeClass('portfolioo_item-4');

    });
    // end warm color 2 -------------------====================




    // space===================================================================================


    // start warm color 2 -------------------====================


    //color platte colorrr -----------

    $('.color-2').on('click', function () {
        $('.footer_item h4,.single_bottom ul li i,.single_content h3,.footer_item h4,.cause_itemm h3,.partner_content i,.cause_itemm h5,.cause_itemm a,.common_part h4,.services_leftt .icon,.common_part h2,.about_right h4 ').css({
            "color": "#fa2851",

        });
    });


    //color platte btn -----------

    $('.color-2').on('click', function () {
        $(".btn1two,.services_leftt").hover(function () {
            $(this).css("background-color", "#fa2851");
        });

        $(".btn1two,.services_leftt").mouseleave(function () {
            $(this).css("background-color", "#fff");
        });
    });

    //color platte Background -----------

    $('.color-2').on('click', function () {
        $('.banner_content .btn1two:hover, .services_right .ratio_three,.head_overly h3:after,.common_parts h3:before,.common_part h3:before,.common_part h4:after,.about_right h4:after,.toptobottom i,.contact_button,.testimonial_whole .slick-dots li button,.Viwe_all a, .services_right .ratio_two, .services_leftt:hover, .services_right .ratio, .services_leftt a,.about_right a,.banner_content .btn1, .banner_content .btn1two:hover ').css({
            "background": "#fa2851",

        });
    });

    //color platte Circleee -----------

    $('.color-2').on('click', function () {
        $('.success-stroke').addClass("color-circle-2");
        $('.success-stroke').removeClass("color-circle-4");
        $('.success-stroke').removeClass("color-circle-3");
        $('.success-stroke').removeClass("color-circle-1");

    });

    //color platte Border -----------
    $('.color-2').on('click', function () {
        $('.banner_content .btn1two, .main_footer hr, .services_leftt, .services_left i,.banner_content .btn1, .banner_content .btn1two, .testimonial_img img').css({
            "border-color": "#fa2851",

        });
    });

    //color platte btn sercices -----------

    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.b1').css("background-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.b1').css("background-color", "#fa2851");
        });
    });

    $('.color-2').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.b2').css("background-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.b2').css("background-color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.b3').css("background-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.b3').css("background-color", "#fa2851");
        });
    });




    //color platte btn sercices -----------

    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });


        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#fa2851");
        });
    });

    // two 
    $('.color-2').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("border-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("border-color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("color", "#fa2851");
        });
    });
    // Three
    $('.color-2').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("border-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("border-color", "#fa2851");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("color", "#fa2851");
        });
    });

    $('.color-2').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.bi').css("color", "black");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.bi').css("color", "white");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.bii').css("color", "black");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.bii').css("color", "white");
        });
    });
    $('.color-2').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.biii').css("color", "black");
        });

        $(".services_leftta").mouseleave(function () {
            $('.biii').css("color", "white");
        });
    });

    // head overly

    $('.color-2').on('click', function (event) {
        $('.about_right h4').addClass('aboutt_right-other');
    });

    $('.color-2').on('click', function (event) {
        $('.common_part h4').addClass('commonn_part-other');

    });
    $('.color-2').on('click', function (event) {
        $('.portfolio_item').addClass('portfolioo_item-2');
        $('.portfolio_item').removeClass('portfolioo_item-3');
        $('.portfolio_item').removeClass('portfolioo_item-4');
        $('.portfolio_item').removeClass('portfolioo_item-1');

    });
    // end warm color 2 -------------------====================



    // start warm color 3 -------------------====================


    //color platte colorrr -----------

    $('.color-3').on('click', function () {
        $('.footer_item h4,.single_bottom ul li i,.single_content h3,.footer_item h4,.cause_itemm h3,.partner_content i,.cause_itemm h5,.cause_itemm a,.common_part h4,.services_leftt .icon,.common_part h2,.about_right h4 ').css({
            "color": "#C0FF3E",

        });
    });


    //color platte btn -----------

    $('.color-3').on('click', function () {
        $(".btn1two,.services_leftt").hover(function () {
            $(this).css("background-color", "#C0FF3E");
        });

        $(".btn1two,.services_leftt").mouseleave(function () {
            $(this).css("background-color", "#fff");
        });
    });

    //color platte Background -----------

    $('.color-3').on('click', function () {
        $('.banner_content .btn1two:hover,.services_right .ratio_three,.head_overly h3:after,.common_parts h3:before,.common_part h3:before,.common_part h4:after,.about_right h4:after,.toptobottom i,.contact_button,.testimonial_whole .slick-dots li button,.Viwe_all a,.services_right .ratio_two, .services_leftt:hover,.services_right .ratio, .services_leftt a,.about_right a,.banner_content .btn1, .banner_content .btn1two:hover ').css({
            "background": "#C0FF3E",

        });
    });

    //color platte Circleee -----------

    $('.color-3').on('click', function () {
        $('.success-stroke').addClass("color-circle-3");
        $('.success-stroke').removeClass("color-circle-1");
        $('.success-stroke').removeClass("color-circle-4");
        $('.success-stroke').removeClass(".color-circle-2");

    });

    //color platte Border -----------
    $('.color-3').on('click', function () {
        $('.banner_content .btn1two,.main_footer hr,.services_leftt,.services_left i,.banner_content .btn1,.banner_content .btn1two,.testimonial_img img').css({
            "border-color": "#C0FF3E",

        });
    });

    //color platte btn sercices -----------

    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.b1').css("background-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.b1').css("background-color", "#C0FF3E");
        });
    });

    $('.color-3').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.b2').css("background-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.b2').css("background-color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.b3').css("background-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.b3').css("background-color", "#C0FF3E");
        });
    });




    //color platte btn sercices -----------

    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#C0FF3E");
        });
    });

    // two 
    $('.color-3').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("border-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("border-color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("color", "#C0FF3E");
        });
    });
    // Three
    $('.color-3').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("border-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("border-color", "#C0FF3E");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("color", "#C0FF3E");
        });
    });

    $('.color-3').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.bi').css("color", "black");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.bi').css("color", "white");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.bii').css("color", "black");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.bii').css("color", "white");
        });
    });
    $('.color-3').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.biii').css("color", "black");
        });

        $(".services_leftta").mouseleave(function () {
            $('.biii').css("color", "white");
        });
    });

    // head overly


    $('.color-3').on('click', function (event) {
        $('.about_right h4').addClass('aboutt_right-other');
    });

    $('.color-3').on('click', function (event) {
        $('.common_part h4').addClass('commonn_part-other');

    });
    $('.color-3').on('click', function (event) {
        $('.portfolio_item').addClass('portfolioo_item-3');
        $('.portfolio_item').removeClass('portfolioo_item-2');
        $('.portfolio_item').removeClass('portfolioo_item-4');
        $('.portfolio_item').removeClass('portfolioo_item-1');
    });
    // end warm color 3 -------------------====================



    // start warm color 4 -------------------====================


    //color platte colorrr -----------

    $('.color-4').on('click', function () {
        $('.footer_item h4,.single_bottom ul li i,.single_content h3,.footer_item h4,.cause_itemm h3,.partner_content i,.cause_itemm h5,.cause_itemm a,.common_part h4,.services_leftt .icon,.common_part h2,.about_right h4 ').css({
            "color": "#27debf",

        });
    });


    //color platte btn -----------

    $('.color-4').on('click', function () {
        $(".btn1two,.services_leftt").hover(function () {
            $(this).css("background-color", "#27debf");
        });

        $(".btn1two,.services_leftt").mouseleave(function () {
            $(this).css("background-color", "#fff");
        });
    });

    //color platte Background -----------

    $('.color-4').on('click', function () {
        $('.banner_content .btn1two:hover,.services_right .ratio_three,.testimonial_whole .slick-dots .slick-active button,.head_overly h3:after,.common_parts h3:before,.common_part h3:before,.common_part h4:after,.about_right h4:after,.toptobottom i,.contact_button,.testimonial_whole .slick-dots li button,.Viwe_all a,.services_right.ratio_two,.services_leftt:hover,.services_right .ratio,.services_leftt a,.about_right a,.banner_content .btn1, .banner_content .btn1two:hover ').css({
            "background": "#27debf",

        });
    });

    //color platte Circleee -----------

    $('.color-4').on('click', function () {
        $('.success-stroke').addClass("color-circle-4");
        $('.success-stroke').removeClass("color-circle-2");
        $('.success-stroke').removeClass(".color-circle-1");
        $('.success-stroke').removeClass(".color-circle-3");

    });

    //color platte Border -----------
    $('.color-4').on('click', function () {
        $('.banner_content .btn1two,.main_footer hr,.services_leftt,.services_left i,.banner_content .btn1,.banner_content .btn1two,.testimonial_img img').css({
            "border-color": "#27debf",

        });
    });

    //color platte btn sercices -----------

    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.b1').css("background-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.b1').css("background-color", "#27debf");
        });
    });

    $('.color-4').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.b2').css("background-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.b2').css("background-color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.b3').css("background-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.b3').css("background-color", "#27debf");
        });
    });




    //color platte btn sercices -----------

    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("border-color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("border-color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.services_leftta i').css("color", "white");
        });

        $(".services_leftta").mouseleave(function () {
            $('.services_leftta i').css("color", "#27debf");
        });
    });

    // two 
    $('.color-4').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("border-color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("border-color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.services_lefttb i').css("color", "white");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.services_lefttb i').css("color", "#27debf");
        });
    });
    // Three
    $('.color-4').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("border-color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("border-color", "#27debf");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.services_lefttc i').css("color", "white");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.services_lefttc i').css("color", "#27debf");
        });
    });

    $('.color-4').on('click', function () {
        $(".services_lefttc").hover(function () {
            $('.bi').css("color", "black");
        });

        $(".services_lefttc").mouseleave(function () {
            $('.bi').css("color", "white");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_lefttb").hover(function () {
            $('.bii').css("color", "black");
        });

        $(".services_lefttb").mouseleave(function () {
            $('.bii').css("color", "white");
        });
    });
    $('.color-4').on('click', function () {
        $(".services_leftta").hover(function () {
            $('.biii').css("color", "black");
        });

        $(".services_leftta").mouseleave(function () {
            $('.biii').css("color", "white");
        });
    });

    // head overly


    $('.color-4').on('click', function (event) {
        $('.about_right h4').addClass('aboutt_right-other');
    });

    $('.color-4').on('click', function (event) {
        $('.common_part h4').addClass('commonn_part-other');

    });
    $('.color-4').on('click', function (event) {
        $('.portfolio_item').addClass('portfolioo_item-4');
        $('.portfolio_item').removeClass('portfolioo_item-3');
        $('.portfolio_item').removeClass('portfolioo_item-2');
        $('.portfolio_item').removeClass('portfolioo_item-1');

    });
    // end warm color 1 -------------------====================






})(jQuery);

// end use strict
