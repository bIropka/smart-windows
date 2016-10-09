$(document).ready(function () {

    /******************************
     ******* other scripts ********
     ******************************/

    $('.custom-select').hover(
        function(){
            if ($(window).width() > '980'){
                $(this).find('i').addClass('fa-chevron-up');
                $(this).find('i').removeClass('fa-chevron-down');
                $(this).find('ul').stop().slideDown();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).find('i').addClass('fa-chevron-down');
                $(this).find('i').removeClass('fa-chevron-up');
                $(this).find('ul').stop().slideUp();
            }
        });

    $('.custom-select .current-value').click(function() {
        if ($(window).width() < '981'){
            $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
            $(this).siblings('ul').stop().slideToggle();
        }
    });

    $('.custom-select ul li').click(function() {
        $(this).find('i').addClass('fa-chevron-down');
        $(this).find('i').removeClass('fa-chevron-up');
        $(this).parent('ul').slideUp();
        var value = $(this).html();
        $(this).parent().siblings('.current-value').html(value);
        $(this).parent().next().find('input').val(value);
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('.custom-select')).length){
            $('.custom-select').removeClass('active');
            $('.custom-select ul').slideUp();
            $('.phones-select').removeClass('active');
            $('.phones-select ul').slideUp();
        }

    });

    $('.header-nav .fa').click(function() {
        $(this).toggleClass('fa-bars fa-times');
        $(this).siblings('nav').stop().slideToggle();
    });

    /******************************
     ******* slider scripts *******
     *****************************/
    $('.slider-banner').slick({
        appendArrows: '.slider-banner-controls',
        prevArrow: '.slider-banner-left',
        nextArrow: '.slider-banner-right'
    });

    $('.slider-portfolio').slick({
        appendArrows: '.slider-portfolio-controls',
        prevArrow: '.slider-portfolio-left',
        nextArrow: '.slider-portfolio-right',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    

});