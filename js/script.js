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

});

function slideToElement(targetClass) {

    $('html,body').animate({
            scrollTop: $(targetClass).offset().top
        },
        'slow');

}

$('#gform').on('submit', function(e){
    $('.message-box').empty();
    let inputs = $('#gform .form-control');
    if(!$(inputs).val()){
        $('.message-box').append('<div class="alert alert-danger" role="alert">Your submission is invalid!</div>');
    }else{
        $('.message-box').append('<div class="alert alert-success" role="alert">Your submission has been processed!</div>');
    }
});



// $('.mailing-form').on('submit', function (e) {
//     e.preventDefault();
// })