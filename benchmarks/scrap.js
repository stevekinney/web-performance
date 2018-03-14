function printStatus(fn) {
  const status = %GetOptimizationStatus(fn)
  switch(status) {
    case 1: console.log(fn.name, "Function is optimized"); break;
    case 2: console.log(fn.name, "Function is not optimized"); break;
    case 3: console.log(fn.name, "Function is always optimized"); break;
    case 4: console.log(fn.name, "Function is never optimized"); break;
    case 6: console.log(fn.name, "Function is maybe deoptimized"); break;
    case 7: console.log(fn.name, "Function is optimized by TurboFan"); break;
    default: console.log(fn.name, "Unknown optimization status", status); break;
  }
}
