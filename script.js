const burgerBtn = document.querySelector(".div--burger_menu");
const burgerMenu = document.querySelector(".unorderedList__styling");

const aboutUsBtn = document.getElementById("about-us");
const whatWeDoBtn = document.getElementById("what-we-do");
const ourTripsBtn = document.getElementById("our-trips");
const whereToGoBtn = document.getElementById("where-to-go");
const reviewsBtn = document.getElementById("reviews");

const aboutUsSection = document.getElementById("about-us-section");
const whatWeDoSection = document.getElementById("what-we-do-section");
const ourTripsSection = document.getElementById("our-trips-section");
const whereToGoSection = document.getElementById("where-to-go-section");
const reviewsSection = document.getElementById("reviews-section");

burgerBtn.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("hidden");
  // console.log("Click");
});

aboutUsBtn.addEventListener("click", (e) => {
  aboutUsSection.scrollIntoView();
  // console.log("Menu clicked");
});
whatWeDoBtn.addEventListener("click", (e) => {
  whatWeDoSection.scrollIntoView();
  // console.log("Menu clicked");
});
ourTripsBtn.addEventListener("click", (e) => {
  ourTripsSection.scrollIntoView();
  // console.log("Menu clicked");
});
whereToGoBtn.addEventListener("click", (e) => {
  whereToGoSection.scrollIntoView();
  // console.log("Menu clicked");
});
reviewsBtn.addEventListener("click", (e) => {
  reviewsSection.scrollIntoView();
  // console.log("Menu clicked");
});
