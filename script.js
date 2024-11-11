// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // Function to add 'fade-in' class to elements in the viewport
  function fadeInOnScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("fade-in");
      }
    });
  }
  
  // Add event listener for scroll to trigger the fade-in effect
  window.addEventListener("scroll", fadeInOnScroll);
  window.addEventListener("load", fadeInOnScroll);
  