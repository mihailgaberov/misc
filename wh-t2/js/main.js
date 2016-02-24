$(function () {

    $(".menu-icon").on("touchstart click", function () {
        $(this).siblings().toggleClass("expanded");
        $("nav").toggleClass("nav-expanded");
    });

    // Load random image
    var arrImages = [];
    arrImages[0] = "img/responsive/random1.jpg";
    arrImages[1] = "img/responsive/random2.jpg";
    arrImages[2] = "img/responsive/random3.jpg";
    arrImages[3] = "img/responsive/random4.jpg";
    arrImages[4] = "img/responsive/random5.jpg";

    var size = arrImages.length
    var randomImageIdx = Math.floor(size * Math.random());

    $("#random").attr("src", arrImages[randomImageIdx]);

    // Fix the top bar on top when the user scrolls
    var navElement = $("nav");
    var stickyNavTop = navElement.offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();


        if (scrollTop > stickyNavTop) {
            navElement.addClass("sticky");
        } else {
            navElement.removeClass("sticky");
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});


