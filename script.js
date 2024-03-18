//setting blur for everything except nav bar
const navbar = document.querySelector('.navbar');
const content = document.querySelectorAll('body > :not(.navbar)');

//toggling the blur
function toggleBlur(on) {
    document.body.classList.toggle('blurred', on);
}

//checks if mouse is on or off 
navbar.addEventListener('mouseenter', () => toggleBlur(true));
navbar.addEventListener('mouseleave', () => toggleBlur(false));

document.querySelectorAll('.nav-item a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Stop the default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target ID (removing the #)
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          const offsetTop = targetElement.offsetTop - 60; 
          window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
          });
      }
  });
});

