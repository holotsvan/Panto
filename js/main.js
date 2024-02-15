"use strict";

const infoButtons = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");
const tabControls = document.querySelector(".tab-controls");

infoButtons.forEach((button) => button.addEventListener("click", toggleHint));

window.addEventListener("click", closeHints);

infoHints.forEach((hint) =>
  hint.addEventListener("click", (e) => e.stopPropagation())
);

function closeHints(e) {
  infoHints.forEach((hint) => hint.classList.add("none"));
}

function toggleHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// initialize Swiper in JS:
const swiper = new Swiper(".swiper", {
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".slider__button--next ",
    prevEl: ".slider__button--prev ",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },
});

// Tabs
const tabButtons = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove for all buttons active class
    tabButtons.forEach((button) =>
      button.classList.remove("tab-controls__btn--active")
    );

    //Add active class to current button
    this.classList.add("tab-controls__btn--active");

    tabsProducts.forEach((product) => {
      if (this.dataset.tab === product.dataset.tabValue) {
        product.classList.remove("none");
      } else {
        product.classList.add("none");
      }
    });

    swiper.update();
  });
});

// mobile-nav-wrapper--open

//Mobile nav
const mobileNavOpen = document.querySelector("#open-mobile-nav-btn");
const mobileNavClose = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpen.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
};

mobileNavClose.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
};
