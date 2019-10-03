const arrSize = 5 // Starting with a 1-indexed array of zeros, the number of elements in your array
const queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ] // a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

const largeInput = 1000000
const largeQueries = [
    
]

function arrayManipulation(n, queries) {
    const arr = new Array(n).fill(0);
    console.time('st')
    queries.forEach(el => {
        const leftIdx = el[0]
        const rightIdx = el[1]
        const summand = el[2]

        for (let i = leftIdx - 1; i <= rightIdx - 1; i++) {
            arr[i] += summand
        }
    });
    
    // return Math.max(...arr)
    const res = Math.max(...arr)
    console.timeEnd('st')
    return res
}

console.log(arrayManipulation(arrSize, queries)) // 200

