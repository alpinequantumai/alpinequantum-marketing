/* Alpine Quantum — site-wide scripts */

// Nav: switch nav appearance when scrolled past hero
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const heroEl = document.querySelector('.hero, .page-hero');
  function updateNav() {
    const triggerPoint = heroEl ? heroEl.offsetHeight - 80 : 80;
    if (window.scrollY > triggerPoint) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// Mobile menu toggle
(function () {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.cssText = isOpen ? '' : 'display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--paper); padding: 24px; border-bottom: 1px solid var(--line); gap: 20px;';
  });
})();

// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submit feedback (placeholder until backend wired)
document.querySelectorAll('.form-submit').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const original = btn.innerHTML;
    btn.innerHTML = 'Message sent ✓';
    btn.style.background = 'var(--accent)';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
    }, 2400);
  });
});
