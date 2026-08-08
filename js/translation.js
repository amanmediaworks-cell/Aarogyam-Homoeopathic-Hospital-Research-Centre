/* Aarogyam Homoeopathic Hospital - Global Engine */

let currentLang = localStorage.getItem('aarogyam_lang') || 'en';
let currentTheme = localStorage.getItem('aarogyam_theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
  }

  // Apply saved language
  applyLanguage(currentLang);

  if (window.lucide) {
    lucide.createIcons();
  }
});

function toggleLanguage() {
  currentLang = currentLang === 'hi' ? 'en' : 'hi';
  localStorage.setItem('aarogyam_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const isHindi = lang === 'hi';

  // Update language buttons
  document.querySelectorAll('.langBtn').forEach(btn => {
    btn.innerHTML = isHindi ? '🇬🇧 English' : '🇮🇳 हिंदी';
  });

  // Update element text & placeholders
  document.querySelectorAll('[data-en]').forEach(el => {
    const textEn = el.getAttribute('data-en');
    const textHi = el.getAttribute('data-hi');

    if (isHindi && textHi) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = textHi;
      } else {
        el.innerHTML = textHi;
      }
    } else if (!isHindi && textEn) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = textEn;
      } else {
        el.innerHTML = textEn;
      }
    }
  });
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('aarogyam_theme', isDark ? 'dark' : 'light');
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (window.lucide) lucide.createIcons();
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  if (drawer) drawer.classList.toggle('active');
  if (backdrop) backdrop.classList.toggle('active');
}

function toggleDesktopWidget() {
  const widget = document.getElementById('desktopWidget');
  if (widget) widget.classList.toggle('open');
}

function openModal(specialty) {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('active');
    if (specialty) {
      const specEl = document.getElementById('modalSpecialty');
      if (specEl) specEl.value = specialty;
    }
  }
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('active');
}

function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modalName') ? document.getElementById('modalName').value : '';
  const phone = document.getElementById('modalPhone') ? document.getElementById('modalPhone').value : '';
  const specialty = document.getElementById('modalSpecialty') ? document.getElementById('modalSpecialty').value : '';

  const text = `*NEW APPOINTMENT BOOKING - AAROGYAM HOSPITAL*\nPatient Name: ${name}\nPhone: ${phone}\nSpecialty: ${specialty}\nPlease confirm my consultation slot with Dr. P. Kumar.`;
  window.open(`https://wa.me/919452994529?text=${encodeURIComponent(text)}`, '_blank');
  closeModal();
}
