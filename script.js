document.addEventListener('DOMContentLoaded', () => {

  /* ===== Mobile nav toggle ===== */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');

  navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
    });
  });

  /* ===== To-top button ===== */
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('visible', window.scrollY > 480);
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===== Screenshot lightbox ===== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.shot').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.full;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  });

});
