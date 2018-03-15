const {
  containerWidth,
  registerNextClick,
 } = setup();

const elements = Array.from(document.querySelectorAll('.element'));

registerNextClick((timestamp) => {
elements.forEach((element) => {
  fastdom.measure(() => {
    const top = element.offsetTop;
    const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
    fastdom.mutate(() => {
      element.style.transform = `translateX(${nextPosition}px)`;
    });
  });
});
});
