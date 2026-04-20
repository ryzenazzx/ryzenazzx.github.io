/* ── Scroll-reveal via IntersectionObserver ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

/* ── Download button click ── */
document.getElementById('downloadBtn').addEventListener('click', function() {
  this.style.transform = 'scale(0.93)';
  setTimeout(() => { this.style.transform = ''; }, 160);
});

/* ── Parallax clouds on mousemove ── */
document.addEventListener('mousemove', function(e) {
  const mx = (e.clientX / window.innerWidth - 0.5) * 18;
  document.querySelectorAll('.cloud-drift-1, .cloud-drift-3, .cloud-drift-5').forEach(c => {
    c.style.marginLeft = mx * 0.6 + 'px';
  });
  document.querySelectorAll('.cloud-drift-2, .cloud-drift-4, .cloud-drift-6').forEach(c => {
    c.style.marginLeft = -mx * 0.4 + 'px';
  });
});
