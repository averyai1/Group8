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

//Image carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

