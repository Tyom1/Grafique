$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });
    $('.item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
});
$('.burg_logo').click(function() {
    $('.pos_nav').show(500);
})
$('#close').css({
    'position' : 'absolute',
    'right' : '10px',
    'top' : '10px',
    'color' : 'white',
    'font-size' : '14px',
    'cursor' : 'pointer'
}).click(function(){
    $('.pos_nav').hide(300);
})

// Button up*************************************************
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('.button_up').addClass('active');
    }
    else {
        $('.button_up').removeClass('active');
    }
});
$('.button_up').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

// Counter****************************************************
$('.counter').each(function () {
    let $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
});

// Animate scroll*********************************************

$(".js-scroll-to-form").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
});