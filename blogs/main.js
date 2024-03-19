var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

$('.toggle').on('click', function (event) {
    if (!$(this).hasClass("open")) {
        $(this).siblings(".content").slideDown();
        $(this).addClass("open");
    } else {
        $(this).siblings(".content").slideUp();
        $(this).removeClass("open");
        $(this).blur();
    }
});

$(".bottom .toggle").click(function () {

    if ($('.bottom .content').is(":visible")) {
        $("html, body").animate({ scrollTop: $(this).offset().top - 10 });
    }

});