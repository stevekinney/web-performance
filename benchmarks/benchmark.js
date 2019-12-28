const { performance, PerformanceObserver } = require("perf_hooks");

// SETUP 🏁

// Since Node-v10.0.0 performance.getEntriesByName is deprecated

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0]);
  performance.clearMarks();
  observer.disconnect();
});
obs.observe({ entryTypes: ["measure"] });

let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

while (iterations--) {
  add(a, b);
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Special Benchmark", "start", "end");
