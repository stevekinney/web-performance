const box = document.querySelector('.box');

box.addEventListener('click', () => {
  const duration = 500;
  const start = perfomance.now();
  const end = start + duration;
  const moveLeft = () => {
    const now = performance.now();

    if (now >= end) return;

    const amount = now - start;

    box.style.marginLeft = `${amount}px`;

    requestAnimationFrame(moveLeft);
  }

  moveLeft();
});
