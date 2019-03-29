/* Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. */
function getConsecutiveOnes(decimal) {
  const binary = []
  let ones = 0
  let highestCountOfOnes = 0

  while (decimal > 0) {
    binary.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }


  let len = binary.length
  while (len > 0) {
    const current = binary[len - 1]
    if (current) {
      ones++
    } else {
      ones = 0
    }

    if (ones > highestCountOfOnes) {
      highestCountOfOnes = ones
    }

    len--
  }

  return highestCountOfOnes
}

console.log(getConsecutiveOnes(5)) // 1
console.log(getConsecutiveOnes(13)) // 2
console.log(getConsecutiveOnes(15)) // 4
console.log(getConsecutiveOnes(7)) // 3
console.log(getConsecutiveOnes(77)) // 2
console.log(getConsecutiveOnes(555)) // 2

/*
* 555 /2 = 277 -> 1
* 277 /2 = 138 -> 1
* 138 /2 = 69 -> 0
* 69 /2 = 34 -> 1
* 34 /2 = 17 -> 0
* 17/2 = 8 ->1
* 8/2 = 4 -> 0
* 4/2  =2 -> 0
* 2/2 =1 -> 0
* 1/2 = 0 ->1*/

/*
* 77 / 2 = 38 ->1
* 38 /2 = 19 -> 0
* 19 /2 = 9 -> 1
* 9 / 2 = 4 -> 1
* 4/2 = 2 ->0
* 2/2 = 1 -> 0
* 1/2 = 0 -> 1*/

// 5 / 2 = 2 -> 1
// 2 / 2 = 1 -> 0
// 1 / 2 = 0 -> 1
//====> 101


/*
* 13 / 2 = 6 -> 1
* 6 / 2 = 3 -> 0
* 3 / 2 = 1 - > 1
* 1 / 2 = 0 -> 1*/
// ====> 1101

/*
* 15 / 2 = 7 -> 1
* 7 / 2 = 3 -> 1
* 3 / 2 = 1 -> 1
* 1 / 2 = 0 -> 1 */

/*
* 7 /2 = 3 -> 1
* 3 /2 = 1 -> 1
* 1/2 = 0 -> 1*/
