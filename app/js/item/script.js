$(document).on('ready', function() {
    var owl1 = $('#owl-init');

    owl1.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:30,
        dots:true,
        autoWidth:true,
        nav:true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            1230:{
                items:1
            }
        }
    });


    $('.navbar .navbar-nav a, .btn-down').click(function () {
        var el = $(this).attr('href');
        $('html,body').animate({scrollTop: $(el).offset().top - 100}, 600);
        return false;
    });
    //при нажатии на ссылку
    $(".navbar-collapse a").click(function() {
        //если она не имеет класс dropdown-toggle
        if (!$(this).hasClass("dropdown-toggle")) {
            //то закрыть меню
            $(".navbar-collapse").collapse('hide');
        }
    });
    $(window).scroll(function() {
        if (screen.width <= '992') return;
        if ($(window).scrollTop() >= 930) {
            $('.navbar').css({
                position: 'fixed',
                opacity: '1'
            });
            $('#phone').css({opacity: '1'});
        }
        if ($(window).scrollTop() <= 600) {
            $('.navbar').css({
                position: 'static',
                opacity: '1'
            });
        }
        if ($(window).scrollTop() > 610 && $(window).scrollTop() < 900) {
            $('.navbar').css({
                opacity: '0'
            });
            $('#phone').css({opacity: '0'});
        }
    });
});