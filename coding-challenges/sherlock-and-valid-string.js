/*
* Sherlock considers a string to be valid if all characters of
* the string appear the same number of times. It is also valid
* if he can remove just 1 character at 1 index in the string,
* and the remaining characters will occur the same number of times.
* Given a string , determine if it is valid. If so, return YES,
* otherwise return NO.
* */

function isValid(s) {
  console.log('------------------')
  console.log('input string: ', s)
  const charsMap = {}

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i]
    if (charsMap[char]) {
      charsMap[char]++
    } else {
      charsMap[char] = 1
    }
  }

  const frequencies = []
  Object.entries(charsMap).forEach(e => frequencies.push(e[1]))
  console.log('map:  ', charsMap)
  console.log('frequencies: ', frequencies)
  const allEqual = frequencies.every(v => v === frequencies[0])

  if (allEqual) return 'YES'

  const highestFrequency = Math.max(...frequencies)
  console.log('highest frequency: ', highestFrequency)
  const lowestFrequency = Math.min(...frequencies)
  console.log('lowest frequency: ', lowestFrequency)
  const countMins = frequencies.filter((x) => { return x === lowestFrequency}).length
  const countMaxes = frequencies.filter((x) => { return x === highestFrequency}).length

  console.log('how many mins: ', countMins)
  console.log('how many maxes: ', countMaxes)

  if (lowestFrequency + 1 >= highestFrequency) {
    return 'YES'
  }

  return 'NO'
}

console.log(isValid('abc')) // YES
console.log(isValid('aabbc')) // YES
console.log(isValid('aaaabbcc')) // NO
console.log(isValid('abccbaasdqweopijdfakljdfaskljd')) // YES
console.log(isValid('abcc')) // YES
console.log(isValid('aabbcd')) // NO
console.log(isValid('aabbccddeefghi')) // NO
console.log(isValid('abcdefghhgfedecba')) // YES
