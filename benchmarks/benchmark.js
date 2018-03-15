const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 100000;

const square = (x) => x * x;
const sumOfSquares = (a, b) => square(a) + square(b);

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  sumOfSquares(iterations, iterations + 1);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
