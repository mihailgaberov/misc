function findLongestSubstr(s) {
  let maxLength = 0
  const charsMap = new Map()

  let i = 0
  let j = 0

  while (j < s.length) {
    if (!charsMap.has(s.charAt(j))) {
      charsMap.set(s.charAt(j), j)
      j++
      maxLength = Math.max(maxLength, j - i)
    } else {
      charsMap.delete(s.charAt(i))
      i++
    }
  }
  return maxLength
}

console.log(findLongestSubstr('abcabcbb')) // 3
console.log(findLongestSubstr('bbbbb')) // 1
console.log(findLongestSubstr('pwwkew')) // 3
