/* Two strings are anagrams of each other if the letters of one string
 can be rearranged to form the other string. Given a string, find the
 number of pairs of substrings of the string that are anagrams of each other.

 For example s = mom, the list of all anagrammatic pairs is [m,m], [mo,om]  at positions
 [0,2] , [[0,1] , [1,2]]respectively.
*/

function isAnagram(str1, str2) {
  const hist = {}

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]
    if (hist[char]) {
      hist[char]++
    } else {
      hist[char] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j]
    if (hist[char]) {
      hist[char]--
    } else {
      return false
    }
  }

  return true
}

function getAllSubstrings(str) {
  var i, j, result = []

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j))
    }
  }
  return result
}

function sherlockAndAnagrams(s) {
  const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length
  if (!duplicatesCount) return 0

  const arr = getAllSubstrings(s)
  let anagramsCount = 0

  // console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    const fromBeginning = arr[i]
    const fromEnd = arr[arr.length - 1 - i]

    if (fromBeginning.length === fromEnd.length && isAnagram(fromBeginning, fromEnd)) {
      console.log('fromBeginning: ', fromBeginning)
      console.log('fromEnd: ', fromEnd)
      anagramsCount++
    }
  }
  return anagramsCount
}


/*console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('ifailuhkqq')) // 3 -> [i, i], [q, q] and [0,1,2],[1,2,3]
console.log(sherlockAndAnagrams('kkkk')) // 10
console.log(sherlockAndAnagrams('cdcd')) // 5 -> c,c d,d cd,dc cd,cd dc,cd*/

console.log(isAnagram('ab', 'bb'))



