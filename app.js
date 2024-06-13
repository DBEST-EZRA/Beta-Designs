const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

const boxes = document.querySelectorAll(".box");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.querySelector("i").classList.toggle("fa-bars");
  menuToggle.querySelector("i").classList.toggle("fa-times");
});

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
