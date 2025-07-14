window.addEventListener('scroll', function () {
   const header = document.querySelector('nav');
   header.classList.toggle('sticky', window.scrollY > 100);
});

// section active

const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
   let currentSectionId = '';

   sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 90 && rect.bottom > 90) {
         // Section is in view (adjust 90px to match navbar height)
         currentSectionId = section.getAttribute('id');
      }
   });

   navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSectionId) {
         link.classList.add('active');
      }
   });
});
