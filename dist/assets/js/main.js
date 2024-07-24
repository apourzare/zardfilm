const bodyTag = document.querySelector("body");
const toggleDarkMode = document.getElementById("toggle-dark-mode");
const toggleDarkModeCircle = document.querySelector("#toggle-dark-mode > div");

toggleDarkMode.addEventListener("click", () => {
  if (bodyTag.classList.contains('dark')) {
    bodyTag.classList.remove('dark')
  } else {
    bodyTag.classList.add('dark')
  }
  toggleDarkMode.classList.toggle('active')
  toggleDarkModeCircle.classList.toggle('right-[34px]')
});
