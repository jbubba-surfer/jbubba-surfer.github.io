document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    circle.style.transition = 'transform 1s ease-in-out';
  
    setInterval(function() {
      circle.style.transform = circle.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
    }, 1000);
  });
  