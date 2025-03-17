const toggleNavbar = () => {
  const navbar = document.querySelector("#nav-bar");
  const navbarContent = document.querySelector("#navbar-content");

  navbarContent.classList.toggle("grid-rows-0fr");
  navbarContent.classList.toggle("grid-rows-1fr");
  navbar.classList.toggle("bg-background");
};
const navbarToggle = document.querySelector("#navbar-toggle");
navbarToggle.addEventListener("click", toggleNavbar);

const toggleDropdown = () => {
  const dropdownContent = document.querySelector("#dropdown-content");

  dropdownContent.classList.toggle("hidden");
};
const dropdownToggle = document.querySelector("#dropdown-toggle");
dropdownToggle.addEventListener("click", toggleDropdown);

const toggleDateCard = () => {
  const dateCard = document.querySelector("#date-card");
  const dateCardContainer = document.querySelector("#date-card-container");

  dateCard.classList.toggle("grid-rows-0fr");
  dateCard.classList.toggle("grid-rows-1fr");
  dateCard.classList.toggle("mt-4");
  dateCardContainer.classList.toggle("md:p-4");
  dateCardContainer.classList.toggle("md:p-8");
};
const checkboxDateCard = document.querySelector("#checkbox-date-card");
checkboxDateCard.addEventListener("click", toggleDateCard);

const navBarSrolled = () => {
  const navBar = document.querySelector("#nav-bar");
  const navBrand = document.querySelector("#nav-brand");

  const scrollY = window.scrollY;
  if (scrollY > 0) {
    navBar.classList.add("shadow", "bg-background");
    navBar.classList.remove("bg-grid");

    navBrand.classList.remove("pointer-events-none");
    navBrand.classList.add("opacity-100");
  } else {
    navBar.classList.remove("shadow", "bg-background");
    navBar.classList.add("bg-grid");

    navBrand.classList.add("pointer-events-none");
    navBrand.classList.remove("opacity-100");
  }
};
window.addEventListener("scroll", navBarSrolled);
