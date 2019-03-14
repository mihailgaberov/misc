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

function checkForAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex]
  const arrRest = arr.slice(currentIndex + 1)
  let counter = 0

  // console.log('>>> currentElement', currentElement)
  // console.log('>>> arrRest', arrRest)

  for (let i = 0; i < arrRest.length; i++) {

    if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
      console.log('currentElement: ', currentElement, ' arrRest:', arrRest[i])
      counter++
    }
  }

  // console.log('arrREst:' , arrRest)
  // console.log('currentElement: ', currentElement, ' counter:', counter)

  return counter
}



function sherlockAndAnagrams(s) {
  const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length
  if (!duplicatesCount) return 0

  let anagramsCount = 0
  const arr = getAllSubstrings(s)


  for (let i = 0; i < arr.length; i++) {

    // const currentElement = arr[i]
    // console.log('curr: ', currentElement)
    anagramsCount += checkForAnagrams(i, arr)
  }

  return anagramsCount;
}


console.log(sherlockAndAnagrams('mom')) // 2
console.log(sherlockAndAnagrams('abba')) // 4
console.log(sherlockAndAnagrams('abcd')) // 0
console.log(sherlockAndAnagrams('ifailuhkqq')) // 3 -> [i, i], [q, q] and [0,1,2],[1,2,3]
console.log(sherlockAndAnagrams('kkkk')) // 10
console.log(sherlockAndAnagrams('cdcd')) // 5 -> c,c d,d cd,dc cd,cd dc,cd
