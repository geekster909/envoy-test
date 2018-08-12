jQuery( document ).ready(function($) {

    $('.header__share--trigger').click(function(e) {
        $('.header__share').toggleClass('active');
    });

    $('.hamburger').click(function(e) {
        $('.header__nav').slideToggle('slow');
        $('.hamburger').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    
    $('.about__hero--slider').slick({
        slide: 'div',
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 930,
            settings: {
                arrows: false,
            }
        }]
    });

});
