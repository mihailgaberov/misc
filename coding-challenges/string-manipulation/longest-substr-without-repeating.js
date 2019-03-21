function findLongestSubstr(s) {
  let maxLength = 0
  const charsMap = new Map()

  let i = 0
  let j = 0

  while (j < s.length) {
    if (!charsMap.has(s.charAt(j))) {
      console.log('j = ', j, ' ADDING: ', s.charAt(j))
      charsMap.set(s.charAt(j), j)
      j++
      console.log('j - i = ', j - i)
      maxLength = Math.max(maxLength, j - i)
    } else {
      console.log('i = ', i, ' REMOVING: ', s.charAt(i))
      charsMap.delete(s.charAt(i))
      i++
    }
  }
  return maxLength
}

console.log(findLongestSubstr('abcabcbb')) // 3
console.log(findLongestSubstr('bbbbb')) // 1
console.log(findLongestSubstr('pwwkew')) // 3
