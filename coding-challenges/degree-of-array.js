/* Given a non-empty array N, of non-negative integers ,
the degree of this array is defined as the maximum frequency
of any one of its elements. Your task is to find the smallest
possible length of a (contiguous) subarray of N, that has the
same degree as N. For example, in the array [1 2 2 3 1], integer
 2 occurs maximum of twice. Hence the degree is 2.

Input

Test case input contains 2 lines.
First line contains an integer T, representing the number of elements in the array.
The second line contains the array N, list of T integers each separated by space.

Output

Print the length of the smallest contiguous subarray of input array N, that has the same degree as N.
Code evaluation is based on your output, please follow the sample format and do NOT print anything else.</p>

Input:
5
1 2 2 3 1

Output:
2

Input: [1, 2, 2, 3, 1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
*/

function getDegree(arr) {
  const elementsCountMap = arr.reduce((acc, curr) => {
    acc[ curr ] = (acc[ curr ] ? ++acc[ curr ] : 1)
    return acc
  }, {})

  const mostFrequentElement = Object.keys(elementsCountMap).reduce((a, b) => elementsCountMap[ a ] > elementsCountMap[ b ] ? a : b, 0)
  return elementsCountMap[ mostFrequentElement ]
}

// Degree of an array
// console.log(getDegree([1,2,2,3,1])) // 2
// console.log(getDegree([1,2,2,3,1,3,1,2,3])) // 3
// console.log(getDegree([1,0,0,0,0,0,0,0,0,0,3])) // 8


// SLOW SOLUTION - IT FAILS WITH BIG INPUT DATA (~50000 records array)
/*function getSmallestLenghtOfArrayWithDegree(nums) {
  const degree = getDegree(nums)
  const len = nums.length
  let smallestLength = len

  for (let i = 0; i < len; i++) {
    const arrEnd = nums.slice(0, len - 1 - i)
    const arrBeginning = nums.slice(1)

    if (getDegree(arrEnd) === degree) {
      smallestLength = arrEnd.length
      nums = [ ...arrEnd ]
    }

    if (getDegree(arrBeginning) === degree) {
      smallestLength = arrBeginning.length
      nums = [ ...arrBeginning ]
    }
  }

  return smallestLength
}*/

// console.log(getSmallestLenghtOfArrayWithDegree([1, 2, 2, 3, 1])) // 2
// console.log(getSmallestLenghtOfArrayWithDegree([1, 2, 2, 3, 1, 4, 2])) // 6
// console.log(getSmallestLenghtOfArrayWithDegree([])) // 0
// console.log(getSmallestLenghtOfArrayWithDegree([1,1,1,1,1,1,1,1,1])) // 9
// console.log(getSmallestLenghtOfArrayWithDegree([1,2,2,2,5,2])) // 5
// console.log(getSmallestLenghtOfArrayWithDegree([1, 1, 2, 2, 2, 1])) // 3

// Let's try quicker solution
function findShortestSubArray(nums) {
  let numsMap = new Map()
  let degree = 1
  let whichDegree = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      const arrNumsPositions = numsMap.get(nums[i])
      arrNumsPositions.push(i)

      if (arrNumsPositions.length > degree) {
        degree = arrNumsPositions.length
        whichDegree = nums[i]
      } else if (arrNumsPositions.length === degree && arrNumsPositions[arrNumsPositions.length - 1] - arrNumsPositions[0] < numsMap.get(whichDegree)[numsMap.get(whichDegree).length - 1] - numsMap.get(whichDegree)[0]) {
        degree = arrNumsPositions.length
        whichDegree = nums[i]
      }
    } else {
      numsMap.set(nums[i], [i])
    }
  }

  return numsMap.get(whichDegree)[numsMap.get(whichDegree).length - 1 ] - numsMap.get(whichDegree)[0] + 1
}

console.log(findShortestSubArray([1, 2, 2, 3, 1])) // 2
// console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])) // 6
// console.log(findShortestSubArray([1,1,1,1,1,1,1,1,1])) // 9
// console.log(findShortestSubArray([1,2,2,2,5,2])) // 5
console.log(findShortestSubArray([1, 1, 2, 2, 2, 1])) // 3
