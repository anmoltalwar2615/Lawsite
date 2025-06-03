document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translateBtn");
  let currentLang = 'en';

  // Try every 500ms until dropdown is found
  const tryInterval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select && translateBtn) {
      clearInterval(tryInterval);

      // Set initial button label
      translateBtn.textContent = currentLang === 'en' ? '中文' : 'English';

      translateBtn.addEventListener("click", () => {
        currentLang = currentLang === 'en' ? 'zh-CN' : 'en';
        select.value = currentLang;
        select.dispatchEvent(new Event("change"));

        // Delay label update slightly for Google Translate to switch
        setTimeout(() => {
          translateBtn.textContent = currentLang === 'en' ? '中文' : 'English';
        }, 300);
      });
    }
  }, 500);
});


// Slideshow Logic
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    setInterval(autoSlide, 10000);
    showSlide(currentSlide);
  }
});
