const contactBtn = document.querySelector('#contact-button');
const modal = document.querySelector('#contactModal');
const closeBtn = document.querySelector('.modal .close');

function openModal() {
  // add the visible class to fade in
  modal.classList.add('visible');
}

function closeModal() {
  // remove it to fade out, then wait and hide
  modal.classList.remove('visible');
  // optional: if you used display:none on remove, you may need to wait for the opacity transition
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// hook up your handlers
contactBtn.addEventListener('click', () => {
  // ensure display flex first so transition can occur
  modal.style.display = 'flex';
  // slight delay so the browser registers the display change before opacity transition
  requestAnimationFrame(openModal);
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});


// Scroll reveal
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
  });
}, { threshold: 0.2 });
faders.forEach(fader => observer.observe(fader));