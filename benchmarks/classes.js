const makeAPoint = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  return new Point(1, 2);
}

const a = makeAPoint();
const b = makeAPoint();

console.log(%HaveSameMap(a, b));
