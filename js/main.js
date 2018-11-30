$(function() {

    'use strict';

    // loader
    $("#open-laoding").fadeOut();


    // sidebar
    $(document).ready(function() {
        $('.sidebar-toggle').bigSlide({
            menuWidth: '450px',
            speed: '800'
        });
    });

    // navbar on scroll
    $(window).on('scroll', function() {

        if ($(document).scrollTop() > 50) {

            $(".fixed-top").css({
                "box-shadow": "0 0 22px 0 rgba(0, 0, 0, 0.35)"
            });


        } else {

            $(".fixed-top").css({
                "transition": ".3s ease-out",
                "box-shadow": "none"
            });
        }

    });

    // typing text
    var typed2 = new Typed('#typed2', {
        strings: ['Unique', 'Creative'],
        typeSpeed: 170,
        backSpeed: 30,
        backDelay: 1000,
        showCursor: false,
        fadeOut: false,
        fadeIn: true,
        loop: true
    });

    // magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.myporto', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });





});