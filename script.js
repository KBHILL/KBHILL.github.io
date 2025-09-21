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

function adjustLayoutForMobile() {
  const width = window.innerWidth;
  const content = document.querySelector('.content'); // Change to your main content selector

  if (width < 600) {
    // Mobile view adjustments
    content.style.width = '100%';
    content.style.padding = '10px';
    content.style.fontSize = '16px';
  } else {
    // Desktop view adjustments
    content.style.width = '70%';
    content.style.padding = '20px';
    content.style.fontSize = '18px';
  }
}

window.addEventListener('resize', adjustLayoutForMobile);
window.addEventListener('load', adjustLayoutForMobile);
