const sampleInput = [
    [1, 1, 1, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0], 
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0], 
    [0, 0, 1, 2, 4, 0]
]
const sampleInput1 = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
]

const sampleInput2 = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

const ROWS = 6
const COLS = 6

const process = (input) => {
    let maxSum = 0
    
    if (ROWS < 3 || COLS < 3) 
        return -1
    for (let i = 0; i < ROWS - 2; i++) {
        for (let j = 0; j < COLS - 2; j++) {
            const sum = input[i][j] + 
                        input[i][j + 1] + 
                        input[i][j + 2] +
                        input[i + 1][j + 1] + 
                        input[i + 2][j] +
                        input[i + 2][j + 1] +
                        input[i + 2][j + 2]

            // Start with the first calculated sum
            if (i === 0 && j === 0) maxSum = sum;

            maxSum = Math.max(maxSum, sum)
        }
    }

    return maxSum
}


// console.log(process(sampleInput)) // 19
console.log(process(sampleInput1)) // -19
console.log(process(sampleInput2)) // -6