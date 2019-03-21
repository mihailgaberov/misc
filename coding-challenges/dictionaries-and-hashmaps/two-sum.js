/*
* This problem was recently asked by Google.

* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

* For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

* Bonus: Can you do this in one pass?
*/

function isTwoNumbersAddUpToK(nums, target) {
  const numsMap = new Map()
  let res = false

  for (let i = 0, len = nums.length; i < len; i++) {
    if(numsMap.has(target - nums[i])) {
      // console.log(numsMap.get(target -  nums[i], i)) // the index of the first number contributing to the sum
      res = true
    } else {
      numsMap.set(nums[i], i)
    }
  }

  console.log(numsMap)

  return res

}


console.log(isTwoNumbersAddUpToK([1, 2, 3, 4, 5], 17)) // false
console.log(isTwoNumbersAddUpToK([1, 1, 1, 1], 17)) // false
console.log(isTwoNumbersAddUpToK([1,10, 15, 3, 7], 17)) // true
