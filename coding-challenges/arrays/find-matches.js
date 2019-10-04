// Write a function that accepts one or more array parameters and returns
// an array of all elements that only exist in _all_ of the passed arrays
// Example: [1, 2, 3], [2, 3, 4] => [2, 3]
const getMatches = (...args) => {
  // const mapMatches = {}
  const firstArr = args[0]
  const result = []

  for (let i = 0, len = firstArr.length; i < len; i++) {
    const firstArrElement = firstArr[i]
    let isIncluded = true

    if (result.includes(firstArrElement)) {
      continue;
    }

    for (let j = 1, argsLen = args.length; j < argsLen; j++) {
      const currentArr = args[j]
      if (!currentArr.includes((firstArrElement))) {
        isIncluded = false
      }
    }

    if (isIncluded) {
      result.push(firstArrElement)
    }
  }

  return result
}

console.log(getMatches([1, 2, 2, 3], [2, 3, 4]))
/*
console.log(getMatches([true, false], [false, false, false], [false])) // false
console.log(getMatches([true, false], [], [false])) // []
// console.log(getMatches([])) // []
console.log(getMatches([1, 2, 3], [2, 3, 4])) // [2, 3]
console.log(getMatches(['mihail', 'svilen'], ['mihail', 'svilen'], ['mihail', 'svilen', 'bobby', 'lina'])) // ['mihail', 'svilen']
console.log(getMatches([1, 2, 3], [2, 3, 4], [4, 5, 6], [6, 7, 8])) // []
console.log(getMatches([1,7, 2, 3], [7, 2, 3, 4], [4, 5, 7, 6], [22, 6, 7, 8])) // [7]
*/

