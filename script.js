// Google Translate Toggle Logic
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'zh-CN,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById('translateBtn');
  const container = document.getElementById('google_translate_element');

  if (translateBtn && container) {
    container.style.display = 'none'; // Hide the dropdown UI

    translateBtn.addEventListener('click', () => {
      const select = document.querySelector('.goog-te-combo');
      if (!select) return;

      const currentLang = select.value;
      const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';

      select.value = newLang;
      select.dispatchEvent(new Event('change'));

      translateBtn.innerText = newLang === 'zh-CN' ? 'English' : '中文';
    });

    // Auto update label if user reloads after translating
    const observer = new MutationObserver(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        translateBtn.innerText = select.value === 'zh-CN' ? 'English' : '中文';
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

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
