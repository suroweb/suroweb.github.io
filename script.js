document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Filter projects
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
        } else if (card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });

      // Close mobile menu if open
      mainNav.classList.remove("active");
    });
  });

  // Contact Form Submission
  const contactForm = document.querySelector(".contact-form");
  const confirmationModal = document.getElementById("confirmation-modal");
  const closeModal = document.querySelector(".close-modal");
  const modalBtn = document.querySelector(".modal-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission for demo

      // Show confirmation modal
      confirmationModal.classList.add("active");

      // Reset form fields
      contactForm.reset();
    });
  }

  // Close modal when clicking the X button or Close button
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      confirmationModal.classList.remove("active");
    });
  }

  if (modalBtn) {
    modalBtn.addEventListener("click", () => {
      confirmationModal.classList.remove("active");
    });
  }

  // Close modal when clicking outside of it
  window.addEventListener("click", (e) => {
    if (e.target === confirmationModal) {
      confirmationModal.classList.remove("active");
    }
  });
});
