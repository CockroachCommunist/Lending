const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const body = document.getElementById('body')

menu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("open");
  nav.classList.toggle("open");
  body.classList.toggle('is-open')
});
