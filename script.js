document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const themeIcon = themeToggle.querySelector("i");

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  // Scroll Progress Bar
  const scrollProgress = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + "%";
  });

  // Header Scroll Effect
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Active Section Highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Reveal on Scroll
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // Animated Counter for Stats
  const statNumbers = document.querySelectorAll(".stat-number");
  let hasCountedStats = false;

  const animateStats = () => {
    if (hasCountedStats) return;

    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.75;

    if (sectionTop < triggerPoint) {
      hasCountedStats = true;

      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target;
          }
        };

        updateCounter();
      });
    }
  };

  window.addEventListener("scroll", animateStats);
  animateStats(); // Initial check

  // Animate Skill Bars
  const skillBars = document.querySelectorAll(".skill-progress");
  let hasAnimatedSkills = false;

  const animateSkills = () => {
    if (hasAnimatedSkills) return;

    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.75;

    if (sectionTop < triggerPoint) {
      hasAnimatedSkills = true;

      skillBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        setTimeout(() => {
          bar.style.width = progress + "%";
        }, 100);
      });
    }
  };

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Initial check

  // Typewriter Effect
  const typewriterElement = document.getElementById("typewriter");
  const words = ["Developer", "Designer", "Creator", "Problem Solver"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  function typeWriter() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typewriter effect after a short delay
  setTimeout(typeWriter, 1000);

  // Scroll indicator smooth scroll
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const aboutSection = document.getElementById("about-me");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

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

  // Contact Form Validation and Submission
  const contactForm = document.querySelector(".contact-form");
  const confirmationModal = document.getElementById("confirmation-modal");
  const closeModal = document.querySelector(".close-modal");
  const modalBtn = document.querySelector(".modal-btn");
  const formInputs = contactForm?.querySelectorAll("input, textarea");

  // Real-time validation
  formInputs?.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        validateField(input);
      }
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    // Remove existing error
    field.classList.remove("error");
    const existingError = field.parentElement.querySelector(".error-message");
    if (existingError) existingError.remove();

    // Validation rules
    if (field.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = "This field is required";
    } else if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    } else if (field.name === "name" && value.length < 2) {
      isValid = false;
      errorMessage = "Name must be at least 2 characters";
    } else if (field.name === "message" && value.length < 10) {
      isValid = false;
      errorMessage = "Message must be at least 10 characters";
    }

    if (!isValid) {
      field.classList.add("error");
      const error = document.createElement("span");
      error.className = "error-message";
      error.textContent = errorMessage;
      field.parentElement.appendChild(error);
    }

    return isValid;
  }

  function validateForm() {
    let isValid = true;
    formInputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    return isValid;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validateForm()) {
        // Shake form if invalid
        contactForm.classList.add("shake");
        setTimeout(() => contactForm.classList.remove("shake"), 500);
        return;
      }

      // Simulate sending (in real scenario, use EmailJS or backend)
      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Show confirmation modal
        confirmationModal.classList.add("active");

        // Reset form
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
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
