/*
* Lilah = the person with the string (could be an infinite number of other different names).
S = the string pattern we’re given some occurrences of “a” present
S = Must be between 1 and 100 characters.
N = The string character limit we need to meet.
N = Must be between 1 and 1000000000000
“a” = The letter we need to count the number of occurrences from our extended string pattern*/

function repeatedString(s, n) {
  const countOfLetterA = s.split('').filter(c => c === 'a').length
  const times = parseInt(n / s.length)
  const rest = n % s.length
  return times * countOfLetterA + s.slice(0, rest).split('').filter(c => c === "a").length
}

console.log(repeatedString('aba', 10)) // 7
console.log(repeatedString('a', 1000000000000)) // 1000000000000
console.log(repeatedString('ceebbcb',817723)) // 0
