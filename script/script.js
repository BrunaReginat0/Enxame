//dropdown
$(function () {
    $('.navbar li').hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(700);
        },
        function () {
            $('>ul.sub', this).slideUp(700);
        }

    );
});


//aos
AOS.init({
    duration: 2500,
});

//section home video
window.addEventListener("load", function () {
    let video = window.document.querySelector("#video");
    video.play();
    video.loop = true;
});

//cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidePerGroup: 1,
        loop: true,
        loopFillGroupWidthBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidePerGroup: 3,
        loop: true,
        loopFillGroupWidthBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    ;
}

//swiper carousel
var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//menuHamburguer
$("i").click(function () {
    $("ul").toggleClass("open");
});

// about
//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};