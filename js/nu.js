"use strict";

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 30);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navList.classList.toggle("open");
};

window.onscroll = function () {
  menu.classList.remove("fa-times");
  navList.classList.remove("open");
};



//FAQ SECTION

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});




//animation

AOS.init({
  delay: 3,
  duration: 1200,
  once: true,
});
