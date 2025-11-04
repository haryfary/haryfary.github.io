// Mobile nav toggle + small UX niceties
const burger = document.querySelector('.hf-burger');
const mobileNav = document.getElementById('mobile-nav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const open = !mobileNav.hasAttribute('hidden');
    if (open) {
      mobileNav.setAttribute('hidden', '');
      burger.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      burger.setAttribute('aria-expanded', 'true');
    }
  });
}
// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
