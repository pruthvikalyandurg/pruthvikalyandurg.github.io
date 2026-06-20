/* =============================================
   Pruthvi Kalyandurg — Site JS
   ============================================= */

// ─── Nav scroll shadow ───
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Mobile nav toggle ───
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileNav.classList.remove('open'))
  );
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) mobileNav.classList.remove('open');
  });
}

// ─── Active nav link ───
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ─── Fade-in on scroll (IntersectionObserver) ───
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }),
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  fadeEls.forEach(el => io.observe(el));
}

// ─── Publication filter ───
const filterBtns = document.querySelectorAll('.pub-filter-btn');
const pubItems   = document.querySelectorAll('.pub-item[data-theme]');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      pubItems.forEach(item => {
        item.style.display =
          (f === 'all' || (item.dataset.theme || '').includes(f)) ? '' : 'none';
      });
    });
  });
}

// ─── Lightbox for gallery ───
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('img').src = src;
  lb.querySelector('.lb-caption').textContent = caption || '';
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
