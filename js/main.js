"use strict";

const infoButtons = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");
const tabControls = document.querySelector(".tab-controls");
const tabButtons = tabControls.querySelectorAll(".tab-controls__btn");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) =>
      tab.classList.remove("tab-controls__btn--active")
    );
    button.classList.add("tab-controls__btn--active");
  });
});

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
  freeMode:true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".slider__button--next ",
    prevEl: ".slider__button--prev ",
  },

  breakpoints:{
    640:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024:{
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});
