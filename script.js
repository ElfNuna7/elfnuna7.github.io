document.addEventListener('DOMContentLoaded', () => {
  const manuscript = document.getElementById('manuscript');
  const fontToggle = document.getElementById('fontToggle');
  const themeToggle = document.getElementById('themeToggle');

  // Default to serif for reading
  manuscript.classList.add('font-serif');

  let isSerif = true;
  fontToggle.addEventListener('click', () => {
    isSerif = !isSerif;
    if (isSerif) {
      manuscript.classList.add('font-serif');
      fontToggle.textContent = 'Шрифт: Serif';
    } else {
      manuscript.classList.remove('font-serif');
      fontToggle.textContent = 'Шрифт: Sans';
    }
  });

  let isPaper = false;
  themeToggle.addEventListener('click', () => {
    isPaper = !isPaper;
    if (isPaper) {
      manuscript.classList.add('theme-paper');
      themeToggle.textContent = 'Темный фон';
    } else {
      manuscript.classList.remove('theme-paper');
      themeToggle.textContent = 'Бумага';
    }
  });
});
