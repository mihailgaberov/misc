/* You are given an array and you need to find number of triplets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

For example, arr=[1,4,16,64]. If r=4, we have [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3).
*/
/*
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    const inputs = [args[0], args[1], args[2], args[3]]
    if (inputs in cache) {
      // console.log('Fetching from cache', inputs);
      return cache[inputs];
    } else {
      // console.log('Calculating result', inputs);
      let result = fn(inputs);
      cache[inputs] = result;
      return result;
    }
  }
}

const isGeomProgression = memoize(function ([i, j, k, ratio]) {
  return (i * ratio === j && j * ratio === k)
})

function doTheHeavyLifting(arr, i, r) {
  let count = 0
  const first = arr[i]
  const arrRest = arr.slice(i + 1)
  let m = arrRest.length

  while (m--) {
    const second = arrRest[m]
    const arrRestSecond = arrRest.slice(m + 1)
    let n = arrRestSecond.length

    while (n--) {
      const third = arrRestSecond[n]
      count += isGeomProgression(first, second, third, r)
    }
  }

  return count
}

function countTriplets(arr, r) {
  let tripletsCount = 0

  console.time('out')
  // Duff's Device - credit: Jeff Greenberg
  let iterations = arr.length % 8;
  let i = arr.length - 1;

  while (iterations) {
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    iterations--;
  }

  iterations = Math.floor(arr.length / 8);

  while (iterations) {
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    tripletsCount += doTheHeavyLifting(arr, i--, r)
    iterations--;
  }
  console.timeEnd('out')
  return tripletsCount
}

console.log(countTriplets([1, 4, 16, 64], 4)) // 2
console.log(countTriplets([1, 2, 2, 4], 2)) // 2
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)) // 6
console.log(countTriplets([1, 5, 5, 25, 125], 5)) // 4
console.log(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)) // 161700
console.log(countTriplets([1, 1, 1, 1], 1)) // 4
*/

/*
static long countTriplets(List<Long> arr, long r) {
  Map<Long, Long> t2 = new HashMap<>();
  Map<Long, Long> t3 = new HashMap<>();
  long result = 0L;

  for(Long a : arr) {
    result += t3.getOrDefault(a, 0L);
    if (t2.containsKey(a)){
      t3.put(a*r, t3.getOrDefault(a*r, 0L) + t2.get(a));
    }
    t2.put(a*r, t2.getOrDefault(a*r, 0L) + 1);
  }
  return result;
}*/

// Much faster version using default dict data structures
const defaultDictFactory = () => (
  new Proxy({}, {
    get: (target, name) => name in target ? target[name] : 0
  })
)

function countTriplets(arr, r) {
  let v2 = defaultDictFactory()
  let v3 = defaultDictFactory()

  let count = 0

  for (let i = 0, len = arr.length; i < len; i++) {
    const el = arr[i]
    count += v3[el]
    v3[el * r] += v2[el]
    v2[el * r] += 1
  }

  return count
}

console.log(countTriplets([1, 4, 16, 64], 4)) // 2
console.log(countTriplets([1, 2, 2, 4], 2)) // 2
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)) // 6
console.log(countTriplets([1, 5, 5, 25, 125], 5)) // 4
console.log(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)) // 161700
console.log(countTriplets([1, 1, 1, 1], 1)) // 4
