function darkMode() {
  document.body.className = "darkmode";
  document.getElementById('darkswitch').style.display = 'none';
  document.getElementById('lightswitch').style.display = 'block';
}

function lightMode() {
  document.body.className = "lightmode";
  document.getElementById('lightswitch').style.display = 'none';
  document.getElementById('darkswitch').style.display = 'block';
}

// Initialize theme buttons
document.getElementById('lightswitch').style.display = 'none';

// Add smooth navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(17, 29, 44, 0.95)';
    navbar.style.backdropFilter = 'blur(15px)';
  } else {
    navbar.style.backgroundColor = 'var(--navbarcolor)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});