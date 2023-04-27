// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';


//  Initialize Swiper
let swiper = new Swiper(".courseSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   
  breakpoints: {
    1280: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
      },
    },
    1600: {
      
    },
    
  }
});

let swiper2 = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   
  breakpoints: {
    768: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2.4 ,
      spaceBetween: 20,

      //slidesPerView:"auto",
      //centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
      },
    },
    1600: {
      
    },
    
  }
});





var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  loop: true,
  loopedSlides: 4,
  breakpoints: {
    768: {
      slidesPerView: 1.4,
      spaceBetween: 60,
    },
    1280: {
      //slidesPerView: 1.8,
    },
    1600: {
      
    },
    
  }
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  //centeredSlides: true,
  slidesPerView: 'auto',
  //touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  breakpoints: {
    768: {
      
     
    },
    1280: {
      direction:"vertical"
    },
    1600: {
      
    },
    
  }
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;