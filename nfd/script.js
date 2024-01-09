var removeElement = document.getElementById('remove');
var navElement = document.querySelector('nav');
var nav2Element = document.querySelector('.navbar');
var navLinks = document.querySelectorAll('.center a');

function setNavbarHeight(height) {
  nav2Element.style.transition = 'height 0.6s ease 0s';
  nav2Element.style.height = height + 'px';
}

function updateRemoveElementDisplay() {
  var scrollPosition = window.scrollY;

  // Check if the window width is 1300 pixels or less
  if (window.innerWidth < 1300) {
    removeElement.style.display = 'none';
    return;
  }

  // Check if the user has scrolled down
  if (scrollPosition > 50) {
    removeElement.style.display = 'block';
    navElement.id = 'nav2';
    nav2Element.id = 'navbar2';
    navLinks.forEach(function (link) {
      link.style.color = 'white';
    });
  } else {
    removeElement.style.display = 'none';
    navElement.removeAttribute('id');
    nav2Element.removeAttribute('id');
    navLinks.forEach(function (link) {
      link.style.color = 'rgb(79, 86, 98)';
    });
  }
}

// Call the function on page load
window.addEventListener('load', updateRemoveElementDisplay);

// Call the function on window resize
window.addEventListener('resize', function () {
  // Add a delay to ensure the correct width is checked after the resize event
  setTimeout(updateRemoveElementDisplay, 300);
});

// Call the function on scroll
window.addEventListener('scroll', updateRemoveElementDisplay);


document.getElementById("menu-icon").addEventListener("click", function () {
  document.querySelector('.sidebar').style.display =
      (document.querySelector('.sidebar').style.display === 'none') ? 'flex' : 'none';
});

