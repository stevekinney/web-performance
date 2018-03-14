const { performance } = require('perf_hooks');

performance.mark('start');

let iterations = 1e7;
const a = 5;
const b = 10;

const square = (x) => x * x;
const sumOfSquares = (x, y) => x * x + y * y;

while (iterations--) {
  sumOfSquares(a, b);
}

performance.mark('end');

performance.measure('My Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Benchmark');
console.log(measure);
