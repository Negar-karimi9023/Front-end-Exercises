const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", function () {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", function () {
  menuOpenButton.click();
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  // direction: "vertical",
  spaceBetween: 25,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    daynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
