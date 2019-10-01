// Write a function that accepts one or more array parameters and returns
// an array of all elements that only exist in _all_ of the passed arrays
// Example: [1, 2, 3], [2, 3, 4] => [2, 3]

const getMatches = (...args) => {
  const mapMatches = {}

  args.forEach(arr => {
    arr.forEach(el => {
      if(mapMatches[el]) {
        mapMatches[el]++
      } else {
        mapMatches[el] = 1
      }
    })
  })

  return Object.keys(mapMatches).filter(e => {
    if (mapMatches[e] === args.length) {
      return e
    }
  })
}


console.log(getMatches([])) // []
console.log(getMatches([1, 2, 3], [2, 3, 4])) // [2, 3]
console.log(getMatches(['mihail', 'svilen'], ['mihail', 'svilen'], ['mihail', 'svilen', 'bobby', 'lina'])) // ['mihail', 'svilen']
console.log(getMatches([1, 2, 3], [2, 3, 4], [4, 5, 6], [6, 7, 8])) // []
console.log(getMatches([1,7, 2, 3], [7, 2, 3, 4], [4, 5, 7, 6], [22, 6, 7, 8])) // [7]

