const {
  containerWidth,
  registerNextClick,
 } = setup();

 const elements = Array.from(document.querySelectorAll('.element'));

 registerNextClick((timestamp) => {
  const nextPosition = elements.map((element) => {
    const top = element.offsetTop;
    const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
    return nextPosition;
  });

  elements.forEach((element, index) => {
    const nextPosition = nextPositions[index];
    element.style.transform = `translateX(${nextPosition}px)`;
  });
 });
