// ===== Haryfary Site JS =====

// Update copyright year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Optional: Collapse mobile nav after click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(l => l.addEventListener('click', () => {
  if (navCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navCollapse).toggle();
  }
}));
