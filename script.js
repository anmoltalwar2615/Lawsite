document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translateBtn");
  let currentLang = "en";

  function switchLanguage(lang) {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }

  function updateButtonLabel() {
    translateBtn.textContent = currentLang === 'zh-CN' ? "English" : "中文";
  }

  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select && translateBtn) {
      clearInterval(interval);
      updateButtonLabel();

      translateBtn.addEventListener("click", () => {
        currentLang = currentLang === 'en' ? 'zh-CN' : 'en';
        switchLanguage(currentLang);
        setTimeout(updateButtonLabel, 500); // Delay to allow translation
      });
    }
  }, 300);
});
 // SLIDESHOW CODE (leave unchanged)
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
