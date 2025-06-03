document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translateBtn");
  let currentLang = "en";

  // Retry logic to wait for Translate dropdown to load
  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select && translateBtn) {
      clearInterval(interval);

      // Initial label
      translateBtn.textContent = "中文";

      translateBtn.addEventListener("click", () => {
        currentLang = select.value === "en" ? "zh-CN" : "en";
        select.value = currentLang;
        select.dispatchEvent(new Event("change"));

        // Update button label after language switch
        setTimeout(() => {
          translateBtn.textContent = currentLang === "en" ? "中文" : "English";
        }, 300);
      });
    }
  }, 300);

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
