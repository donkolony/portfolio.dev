function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Footer Links scroll up and not down
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopLinks = document.querySelectorAll(".scroll-to-top");

  scrollToTopLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });
    });
  });
});
