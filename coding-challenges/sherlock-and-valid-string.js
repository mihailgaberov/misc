/*
* Sherlock considers a string to be valid if all characters of
* the string appear the same number of times. It is also valid
* if he can remove just 1 character at 1 index in the string,
* and the remaining characters will occur the same number of times.
* Given a string , determine if it is valid. If so, return YES,
* otherwise return NO.
* */

function isValid(s) {
  console.log('zi string: ', s)
  const charsMap = {}

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i]
    if (charsMap[char]) {
      charsMap[char]++
    } else {
      charsMap[char] = 1
    }
  }

  const repeats = []
  Object.entries(charsMap).forEach(e => repeats.push(e[1]))
  console.log('repeats: ', repeats)
  const allEqual = repeats.every(v => v === repeats[0])

  const maxRepeats = Math.max(...repeats)
  console.log('max num of repeats: ', maxRepeats)
  const minRepeats = Math.min(...repeats)
  console.log('min num of repeats: ', minRepeats)
  const countMin = repeats.filter(function (x) { return x === minRepeats }).length
  console.log('count of min`s:', repeats.filter(function (x) { return x === minRepeats }).length)
  const countMax = repeats.filter(function (x) {
    return x === maxRepeats
  }).length
  console.log('count of max`s:', repeats.filter(function (x) {
    return x === maxRepeats
  }).length)

  if (allEqual || countMax === 1 && maxRepeats % minRepeats !== 0) {
    return 'YES'
  }

  return 'NO'
}

console.log(isValid('abc')) // YES
console.log(isValid('aabbc')) // YES
console.log(isValid('aaaabbcc')) // NO
// console.log(isValid('abccbaasdqweopijdfakljdfaskljd')) // YES
// console.log(isValid('abcc')) // YES
// console.log(isValid('aabbcd')) // NO
// console.log(isValid('aabbccddeefghi')) // NO
// console.log(isValid('abcdefghhgfedecba')) // YES
