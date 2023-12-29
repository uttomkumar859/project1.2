var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    // loop:true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0 :{
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      1000:{
        slidesPerView: 3,
      }


    }

});