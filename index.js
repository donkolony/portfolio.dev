// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-list");
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

// Form
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      showMessage("Thanks! Your message has been sent ✅", "success");
    } else {
      showMessage("Oops! Something went wrong. Try again.", "error");
    }
  } catch (err) {
    showMessage("Network error. Please try later.", "error");
  }
});

function showMessage(msg, type) {
  messageBox.textContent = msg;
  messageBox.className = `form-message ${type}`;
  clearTimeout(messageBox.hideTimer);
  messageBox.hideTimer = setTimeout(() => {
    messageBox.className = "form-message";
    messageBox.textContent = "";
  }, 5000); // message fades after 5s
}

function validateEmail(email) {
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return pattern.test(email);
}
