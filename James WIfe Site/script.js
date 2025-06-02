// Google Translate Initialization (required for the widget, if ever needed)
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'zh-CN',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById('translateBtn');

  translateBtn?.addEventListener('click', () => {
    let currentURL = window.location.href;

    // 🔁 Force HTTP, not HTTPS (since your server doesn't support HTTPS)
    currentURL = currentURL.replace(/^https:/, 'http:');

    const translatedURL = `https://translate.google.com/translate?hl=zh-CN&sl=en&u=${encodeURIComponent(currentURL)}&prev=search`;
    window.open(translatedURL, '_blank');
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

    setInterval(autoSlide, 10000); // Auto slide every 10 seconds
    showSlide(currentSlide); // Initialize
  }
});
