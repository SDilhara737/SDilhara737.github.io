// Navbar color change on scroll
window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  let scrollBtn = document.getElementById("scrollTopBtn");
  if (document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
    scrollBtn.style.display = "block";
  } else {
    navbar.classList.remove("scrolled");
    scrollBtn.style.display = "none";
  }
};

// Scroll-to-top button
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
