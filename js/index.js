document.querySelector('.get-now-button').addEventListener('mousemove', (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  button.style.setProperty('--x', x);
  button.style.setProperty('--y', y);
});