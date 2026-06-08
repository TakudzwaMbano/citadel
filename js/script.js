const menuButton = document.querySelector('.menu-btn');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('show');
});

const counters = document.querySelectorAll('.num');
const speed = 40;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.dataset.target;
    const current = +counter.textContent;
    const increment = Math.max(1, Math.round(target / speed));

    if (current < target) {
      counter.textContent = Math.min(target, current + increment);
      setTimeout(updateCount, 40);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
});

const sliders = document.querySelectorAll('.gallery-slider');
const slideInterval = 4500;

sliders.forEach(slider => {
  let currentIndex = 0;
  const slides = slider.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const moveToSlide = index => {
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  let intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  }, slideInterval);

  slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });

  slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }, slideInterval);
  });
});
