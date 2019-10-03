const n =  2
const q =  [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]

const dynamicArray = (numOfSequences, queries) => {
    const sequences = []
    let lastAnswer = 0
    let result = []

    for (let i = 0; i < queries.length; i++) {
        const [q, x, y] = queries[i]
        const seqIndex = (x ^ lastAnswer) % n
        if (!sequences[seqIndex]) {
            sequences[seqIndex] = [];
        }
        if (q === 1) {
            sequences[seqIndex].push(y)
        } else if (q === 2) {
            lastAnswer = sequences[seqIndex][y % sequences[seqIndex].length]
            result.push(lastAnswer)
        }
    }
    return result;
}

console.log(dynamicArray(n, q))