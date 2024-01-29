
// const burg = document.querySelector("#burger");
// const ul = document.querySelector("nav ul")
// const nav = document.querySelector("nav")
// const navLink = document.querySelectorAll(".nav-li");


// burg.addEventListener("click", () => {
//     ul.classList.toggle("show");
// })

// navLink.forEach((link) => link.addEventListener("click", () => {
//     ul.classList.remove("show");
// }))


jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });
});

(function () {
    $('.flex-container').waitForImages(function () {
        $('.spinner').fadeOut();
    }, $.noop, true);

    $(".flex-slide").each(function () {
        $(this).hover(function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(0deg)',
                top: '10%'
            });
            $(this).find('.flex-about').css({
                opacity: '1'
            });
        }, function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(90deg)',
                top: '15%'
            });
            $(this).find('.flex-about').css({
                opacity: '0'
            });
        })
    });
})();