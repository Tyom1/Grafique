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
