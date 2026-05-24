// ── Nav scroll behavior ──
const nav = document.getElementById('main-nav');
if (nav) {
  // On inner pages, start in scrolled state if page is already scrolled
  if (window.scrollY > 60) nav.classList.add('scrolled');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Mobile menu ──
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Active nav link ──
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === page) link.classList.add('active');
  });
})();
