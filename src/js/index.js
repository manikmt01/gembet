//Header

// Reusable Dropdown Logic
document.addEventListener('click', function (e) {
  const isDropdownBtn = e.target.closest('[data-dropdown]');
  const isInsideDropdown = e.target.closest('.dropdown');
  const allMenus = document.querySelectorAll('.dropdown-menu');

  if (isDropdownBtn) {
    const parent = isDropdownBtn.closest('.dropdown');
    const menu = parent.querySelector('.dropdown-menu');

    allMenus.forEach(m => {
      if (m !== menu) m.classList.remove('show');
    });

    menu.classList.toggle('show');
  } else if (!isInsideDropdown) {
    allMenus.forEach(m => m.classList.remove('show'));
  }
});

// Mobile Menu Toggle
// const mobileToggleBtn = document.querySelector('[data-mobile-menu-toggle]');
// const mobileMenu = document.getElementById('mobileMenu');
// const closeMobileBtn = document.querySelector('[data-close-mobile]');

// mobileToggleBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('offcanvas-open');
// });

// closeMobileBtn.addEventListener('click', () => {
//   mobileMenu.classList.remove('offcanvas-open');
// });

//Slider
const sliderWrapper = document.getElementById('sliderWrapper');
const totalSlides = sliderWrapper.children.length;
let currentSlide = 0;

function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
}, 10000);

// tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Remove active styles
    tabButtons.forEach(b => b.classList.remove('active-tab'));
    btn.classList.add('active-tab');

    // Show correct content
    tabPanes.forEach(pane => {
      pane.classList.add('hidden');
      if (pane.getAttribute('data-tab-content') === target) {
        pane.classList.remove('hidden');
      }
    });
  });
});

//faq
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('svg');
      const isOpen = content.classList.contains('max-h-40');

      document.querySelectorAll('.faq-content').forEach(c => {
        c.classList.remove('max-h-40', 'py-2');
      });

      document.querySelectorAll('.faq-icon').forEach(i => {
        i.classList.remove('rotate-180');
      });

      if (!isOpen) {
        content.classList.add('max-h-40', 'py-2');
        icon.classList.add('rotate-180');
      }
    });
  });
});
