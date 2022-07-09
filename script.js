const mode = document.querySelector(".mode");
const body = document.body;

mode.addEventListener("click", () => {
  body.classList.toggle("theme");

  if (body.classList.contains("theme")) {
    mode.src = "img/sun.png";
  } else {
    mode.src = "img/moon.png";
  }
});
