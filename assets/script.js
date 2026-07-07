const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}, {passive:true});

const menuToggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');
const navBackdrop = document.getElementById('navBackdrop');

function openMenu(){
  navlinks.classList.add('is-open');
  navBackdrop.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  navlinks.classList.remove('is-open');
  navBackdrop.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  const isOpen = navlinks.classList.contains('is-open');
  if(isOpen){ closeMenu(); } else { openMenu(); }
});
navBackdrop.addEventListener('click', closeMenu);
navlinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && navlinks.classList.contains('is-open')) closeMenu();
});
window.addEventListener('resize', () => {
  if(window.innerWidth > 900 && navlinks.classList.contains('is-open')) closeMenu();
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.15});
revealEls.forEach(el => io.observe(el));
