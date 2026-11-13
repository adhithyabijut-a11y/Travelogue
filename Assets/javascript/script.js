const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('open', isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (
      menuButton.getAttribute('aria-expanded') === 'true' &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = newsletterForm.querySelector('.form-message');

    if (message) {
      message.textContent =
        'Thanks for your interest! This demo form does not send or store your email.';
    }

    newsletterForm.reset();
  });
}