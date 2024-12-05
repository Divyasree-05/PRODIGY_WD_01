// Get the navigation bar element
const navbar = document.querySelector('.nav-bar');

// Function to change styles on scroll
window.onscroll = function() {
  // Get the scroll position
  let scrollPosition = window.scrollY;

  // If the scroll position is greater than a certain value, lighten the navbar
  if (scrollPosition > 50) {
    navbar.style.backgroundColor = '#2a3b56';  // Lighter color for the navbar
    navbar.style.boxShadow = '2px 3px 8px rgb(0, 255, 255, 0.5)';
  } else {
    // Reset navbar color when not scrolling too far
    navbar.style.backgroundColor = '#142140'; // Original color
    navbar.style.boxShadow = '2px 3px 8px rgb(0, 255, 255, 0.2)';
  }
};
