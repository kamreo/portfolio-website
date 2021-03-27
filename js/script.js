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
    $('.button-skills').click(function () {
        slideToElement('#skills');

    })

})



function slideToElement(targetClass) {

    $('html,body').animate({
            scrollTop: $(targetClass).offset().top
        },
        'slow');

}

jQuery('#gform').on('submit', function(e){
      jQuery('.message-box').append('<div class="alert alert-success" role="alert">Your submission has been processed!</div>');
});



// jQuery('.mailing-form').on('submit', function (e) {
//     e.preventDefault();
// })