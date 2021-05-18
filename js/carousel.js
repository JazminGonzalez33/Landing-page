$(".carousel1").owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            imtes: 1,
            nav: false
        },
        600: {
            imtes: 1,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }

});