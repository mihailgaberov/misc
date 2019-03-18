// Complete the countingValleys function below.
function countingValleys(n, s) {
  let seaLevel = 0;
  let valleysCount = 0;


  for (let idx in s) {
    if (s.hasOwnProperty(idx)) {
      const char = s[idx]

      if (char === 'D' && seaLevel === 0) {
        valleysCount++
      }

      if (char === 'U') {
        seaLevel++
      } else {
        seaLevel--
      }
    }
  }

  return valleysCount
}

console.log(countingValleys(8, 'UDDDUDUU')) // 1
console.log(countingValleys(12, 'DDUUDDUDUUUD')) // 2
