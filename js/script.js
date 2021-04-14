const menu = document.querySelector("nav ul");
const bars = document.querySelector(".fa-bars");
const close = document.getElementById("close");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

//open navmenu when clicking the hamburger menu
function openMenu() {
  menu.classList.add("toggle-menu");
}

//close navmenu when clicking the cross
function closeMenu() {
  menu.classList.remove("toggle-menu");
}

//function to highlight each section in the nav when at that section
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

bars.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
