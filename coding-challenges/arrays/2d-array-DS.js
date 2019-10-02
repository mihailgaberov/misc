const sampleInput = [
    [1, 1, 1, 0, 0, 0], 
    [0, 1, 0, 0, 0, 0], 
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0], 
    [0, 0, 1, 2, 4, 0]
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
            maxSum = Math.max(maxSum, sum)
        }
    }

    return maxSum
}


console.log(process(sampleInput)) // 19