const setup = () => {
  const main = document.querySelector('.application');
  const startButton = document.getElementById('start-stop-button');
  const nextTickButton = document.getElementById('next-tick-button');
  const containerWidth = main.offsetWidth;
  const elementWidth = 25;

  let isRunning = false;
  let nextTick = () => {};
  let nextAnimationFrame;

  const registerNextClick = (fn) => {
    nextTick = fn;
  };

  startButton.addEventListener('click', () => {
    if (!isRunning) {
      nextAnimationFrame = requestAnimationFrame(function frame(timestamp) {
        nextTick(timestamp);
        nextAnimationFrame = requestAnimationFrame(frame);
      });
      startButton.textContent = 'Stop';
      isRunning = true;
      main.style.display = 'block';
    } else {
      main.style.display = 'none';
      startButton.textContent = 'Start';
      cancelAnimationFrame(nextAnimationFrame);
      isRunning = false;
    }
  });

  nextTickButton.addEventListener('click', () => {
    nextTick(performance.now());
  });

  const createElement = (count) => {
    const element = document.createElement('div');
    element.classList.add('element');
    element.style.top = `${count * 50}px`;
    return element;
  };

  const fragment = document.createDocumentFragment();
  for (let count = 0; count < 500; count++) {
    const element = createElement(count);
    fragment.appendChild(element);
  }

  main.appendChild(fragment);

  return {
    containerWidth,
    registerNextClick,
  }
};
