document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener('click', function(e) {
  const img = document.createElement('img');
  img.src = 'assets/lightning-bolt-icon-vector-removebg-preview.png'; // Replace with your image URL
  img.className = 'click-image';
  img.style.left = `${e.pageX}px`;
  img.style.top = `${e.pageY}px`;

  document.body.appendChild(img);

  // Remove image after 1 second
  setTimeout(() => {
    img.remove();
  }, 1000);
});