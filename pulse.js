// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
  
    setInterval(function() {
      circle.classList.toggle('pulse');
    }, 1000); // Toggle every second (1000 milliseconds)
  });
  