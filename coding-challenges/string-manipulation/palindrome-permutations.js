/*
* A palindrome is a word or phrase that is the same forwards and backward.Examples: 
* palindrome("abba") === true
* palindrome("abcdefg") === false 
* A permutation is a rearrangement of letters. 
* The exerciseGiven a string, write a function to check if
 * it is a permutation of a palindrome. The palindrome does not need to be limited to just dictionary words.*/


function isAllEqual(arr) { arr.every(v => v === arr[0]) }

function couldThisBeAPalindrome(str) {
  let res = false

  // Convert the string to array
  const arr = str.split('')

  if (arr.length === 1 || isAllEqual(arr)) {
    res = true
  }

  const charsMap = {}

  for (let i = 0, len = arr.length; i < len; i++) {
    const char = arr[i]
    if (charsMap[char]) {
      charsMap[char]++
    } else {
      charsMap[char] = 1
    }
  }

  const occurrences = []

  Object.entries(charsMap).filter(e => {
    occurrences.push(e[1])
  })

  // Iterate over all of the occurrences and check if they are even
  res = occurrences.every(e => e % 2 === 0 || e === 1)

  // console.log('res: ', res)
  // If we go to case 8 3
  if (!res) {
    // find the middle of the string
    const mid = Math.round(arr.length / 2)
    const firstHalf = arr.slice(0, mid)
    // Remove the last element of the first half
    firstHalf.splice(-1, 1)
    const secondHalf = arr.slice(mid).reverse() // Reverse the second for following comparison with the first half

    // Compare both halves after reversing one of them - if match we have a palindrome
    res = firstHalf.every((e, idx) => e === secondHalf[idx])

    // console.log('res: ', res)

  }

  return {str, res}
}

console.log(couldThisBeAPalindrome('aaaabbbaaaa')) // true 8 3
console.log(couldThisBeAPalindrome('baa')) // true -> aba 1 2
console.log(couldThisBeAPalindrome('bca')) // false 1 1 1
console.log(couldThisBeAPalindrome('a')) // true 1
console.log(couldThisBeAPalindrome('bb')) // true 2
console.log(couldThisBeAPalindrome('bbaaac')) // false 1 2 3
console.log(couldThisBeAPalindrome('bbaacd')) // false 2 2 1 1
console.log(couldThisBeAPalindrome('aabbbbcccccc ')) // true 2 4 6
console.log(couldThisBeAPalindrome('aabcccc')) // true 1 2 4
console.log(couldThisBeAPalindrome('aabcdddd')) // false 1 1 2 4
console.log(couldThisBeAPalindrome('aaaaaaaabb')) // true 8 2
