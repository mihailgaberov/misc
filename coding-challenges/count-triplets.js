/* You are given an array and you need to find number of triplets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

For example, arr=[1,4,16,64]. If r=4, we have [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3).
*/

function isGeomProgression(i, j, k , ratio) {
  return (i * ratio === j && j * ratio === k)
}

function countTriplets(arr, r) {
  let l = 0
  let count = 0

  while (l < arr.length) {
    // Check the current element with the following three elements
    const currEl0 = arr[l]
    const nextEl1 = arr[l+1]
    const nextEl2 = arr[l+2]
    const nextEl3 = arr[l+3]

    count += isGeomProgression(currEl0, nextEl1, nextEl2, r) + isGeomProgression(currEl0, nextEl2, nextEl3, r) + isGeomProgression(currEl0, nextEl1, nextEl3, r)

    l++
  }


  return count
}


// console.log(countTriplets([1, 4, 16, 64], 4)) // 2
// console.log(countTriplets([1, 2, 2, 4], 2)) // 2
// console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)) // 6
// console.log(countTriplets([1, 5, 5, 25, 125], 5)) // 4
console.log(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)) // 161700
