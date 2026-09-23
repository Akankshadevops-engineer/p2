// Reveal each section once as it scrolls into view (single, restrained effect)
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  sections.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(12px)';
    s.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
});
