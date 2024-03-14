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
