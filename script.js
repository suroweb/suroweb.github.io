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

  // Handle project card clicks
  const imageModal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeButtons = document.querySelectorAll(".close-modal");

  // Project card clicks - opens the image modal
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const imgAlt = this.querySelector("img").alt;
      
      modalImage.src = imgSrc;
      modalImage.alt = imgAlt;
      
      // Modal mit Animation anzeigen
      imageModal.style.display = "flex";
      // Small timeout to ensure display:flex is applied before the animation starts
      requestAnimationFrame(() => {
        imageModal.classList.add("active");
      });
    });
  });

  // Modal close functionality
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.classList.remove("active");
      setTimeout(() => {
        if (!modal.classList.contains("active")) {
          modal.style.display = "none";
        }
      }, 300); // Match the CSS transition duration
    });
  });

  // Close modals when clicking outside of them
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.classList.remove("active");
      setTimeout(() => {
        if (!event.target.classList.contains("active")) {
          event.target.style.display = "none";
        }
      }, 300);
    }
  });
});
