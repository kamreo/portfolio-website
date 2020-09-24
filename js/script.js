$(document).ready(function () {
    $('.button-about').click(function () {
        slideToElement('#about');

    })
    $('.button-home').click(function () {
        slideToElement('#home');

    })
    $('.button-projects').click(function () {
        slideToElement('#projects');

    })
    $('.button-contact').click(function () {
        slideToElement('#contact');

    })


})



function slideToElement(targetClass) {

    $('html,body').animate({
            scrollTop: $(targetClass).offset().top
        },
        'slow');

}