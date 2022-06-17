$(document).ready(function () {

    $('.slide-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 100,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
})