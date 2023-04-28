/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';

//  Initialize Swiper
let swiper = new Swiper(".courseSwiper", {
  pagination: {
    el: ".swiper-pagination1",
    clickable: true
  },
  breakpoints: {
    1280: {
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1"
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        type: "fraction"
      }
    }
  }
});
let swiper2 = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1.4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 2.4,
      spaceBetween: 20,
      //slidesPerView:"auto",
      //centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
      }
    }
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
      spaceBetween: 60
    },
    1280: {
      slidesPerView: 1.8,
      spaceBetween: 50
    }
    // 1600: {

    // },
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
    768: {},
    1280: {
      direction: "vertical",
      spaceBetween: 35
    }
    // 1600: {

    // },
  }
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
let burgerBtn = document.querySelector(".header__burger");
let closeBtn = document.querySelector(".side-menu__close-btn");
let headerBtn = document.querySelector(".header__btn");
let sideMenu = document.querySelector(".sideMenu-js");
let sideMenuRegister = document.querySelector(".sideMenuRegister-js");
let closeRegister = document.querySelector(".close-register-js");
burgerBtn.addEventListener("click", function () {
  sideMenu.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  sideMenu.classList.remove("show");
});
headerBtn.addEventListener("click", function () {
  sideMenuRegister.classList.add("show");
});
closeRegister.addEventListener("click", function () {
  sideMenuRegister.classList.remove("show");
});
/******/ })()
;
//# sourceMappingURL=main.js.map