$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0: {
            items: 1 ,
            nav : false,
        },
        400:{
            items:1,
            nav: false,
        },
        600:{
            items:2,
            nav: false,
        },
        1000:{
            items:3,
        },
        1660:{
            items: 4,
        }
    }
})