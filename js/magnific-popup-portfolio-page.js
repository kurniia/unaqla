$(function() {

    'use strict';

    // magnific popup portfolio page
    $('.portfolio-page').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.myportos', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });

});