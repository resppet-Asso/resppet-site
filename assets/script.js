
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(el => {
    if(el.getAttribute('data-page') === current){ el.classList.add('active'); }
  });
});
