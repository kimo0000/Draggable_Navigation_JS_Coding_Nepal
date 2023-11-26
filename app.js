const nav = document.querySelector("nav"),
  divEl = document.querySelectorAll("div"),
  closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  divEl.forEach((el) => el.classList.toggle("active"));
});
