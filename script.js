
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('header a, a.hero-cta');
  
  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});
