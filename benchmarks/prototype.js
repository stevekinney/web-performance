class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const first = new Point(1, 2);
const second = new Point(3, 4);

delete second.x;

const sameMap = %HaveSameMap(first, second);

console.log(sameMap);
