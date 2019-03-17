function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


function memfactorial(n) {
  if (!memfactorial.cache) {
    memfactorial.cache = {
      "0": 1,
      "1": 1
    };
  }

  if (!memfactorial.cache.hasOwnProperty(n)) {
    memfactorial.cache[n] = n * memfactorial(n - 1);
  }

  return memfactorial.cache[n];
}

console.time('test')
console.log(factorial(20))
console.timeEnd('test')

console.time('test')
console.log(memfactorial(20))
console.timeEnd('test')
