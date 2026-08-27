/* =========================================================
   SIDDHI MAGAR — PORTFOLIO SCRIPT
   Handles: scroll-reveal animations, active nav highlighting,
   missing-image fallback labels, and contact form validation.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 2. Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 130;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  /* ---------- 3. Missing-image fallback ----------
     Every <img> that fails to load (because the real photo
     hasn't been added yet under /images/...) gets swapped
     for a labeled placeholder instead of a broken-image icon. */
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', function () {
      const frame = img.closest('.photo-frame, .project-shot');
      if (frame) frame.classList.add('img-missing');
    });
  });

  /* ---------- 4. Contact form validation ----------
     Front-end validation only.
     NOTE FOR SIDDHI: this form does not send email yet — wire it
     up to a backend or a service like Formspree / EmailJS to
     actually deliver messages. */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const successMsg = document.getElementById('formSuccess');
        if (successMsg) successMsg.classList.remove('d-none');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        return;
      }
      contactForm.classList.add('was-validated');
    });
  }

});
