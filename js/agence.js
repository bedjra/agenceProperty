// Menu burger (mobile)
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('mainNav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((l) => l.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 960) setMenu(false); });

// Lien actif selon la section visible
(function () {
  const links = document.querySelectorAll('.main-nav a[href^="#"]');
  const sections = [];

  links.forEach((l) => {
    const el = document.querySelector(l.getAttribute('href'));
    if (el) sections.push({ link: l, el });
  });

  function onScroll() {
    const y = window.scrollY + 120;
    let current = sections[0];
    sections.forEach((s) => { if (s.el.offsetTop <= y) current = s; });
    links.forEach((l) => l.classList.remove('active'));
    if (current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Apparition progressive des éléments
(function () {
  const items = document.querySelectorAll('.service-card, .value');
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--d', (i % 4) * 0.1 + 's');
    io.observe(el);
  });
})();