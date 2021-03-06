/*
* A palindrome is a word or phrase that is the same forwards and backward.
* Examples: 
* palindrome("abba") === true
* palindrome("abcdefg") === false 
* A permutation is a rearrangement of letters. 
* The exercise
* Given a string, write a function to check if
* it is a permutation of a palindrome. The palindrome
* does not need to be limited to just dictionary words.
*/
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

  Object.entries(charsMap).filter(e => occurrences.push(e[1]))

  // Iterate over all of the occurrences and check if they are even
  //
  // .log('occurences: ', occurrences)
  res = occurrences.every(e => !(e & 1) || e === 1) // e & 1 === 0 ? even : odd

  // Check if all occurrences are one, e.g. bca ==> 1 1 1 => not valid
  res = !(occurrences.every(e => e === 1) && occurrences.length > 1)

  // console.log('>>>> res: ', res)

  // If we go to case 8 3
  if (!res) {
    // Find the middle of the string
    const mid = Math.round(arr.length / 2)
    const firstHalf = arr.slice(0, mid)

    // Remove the last element of the first half
    firstHalf.splice(-1, 1)
    const secondHalf = arr.slice(mid).reverse() // Reverse the second for following comparison with the first half

    // Compare both halves after reversing one of them - if match we have a palindrome
    res = firstHalf.every((e, idx) => e === secondHalf[idx])
  }

  return {str, res}
}

console.log(couldThisBeAPalindrome('aaaabbbaaaa')) // 8 3 => true
console.log(couldThisBeAPalindrome('baa')) // 1 2 => true
console.log(couldThisBeAPalindrome('bca')) // 1 1 1 => false
console.log(couldThisBeAPalindrome('a')) // 1 => true
console.log(couldThisBeAPalindrome('bb')) // 2 => true
console.log(couldThisBeAPalindrome('bbaaac')) // 1 2 3 => false
console.log(couldThisBeAPalindrome('bbaacd')) // 2 2 1 1 => false
console.log(couldThisBeAPalindrome('aabbbbcccccc ')) // 2 4 6 => true
console.log(couldThisBeAPalindrome('aabcccc')) // 1 2 4 => true
console.log(couldThisBeAPalindrome('aabcdddd')) // 1 1 2 4 => false
console.log(couldThisBeAPalindrome('aaaaaaaabb')) // 8 2 => true
