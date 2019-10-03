const sample = [3, 2, 1, 3]

const birthdayCakeCandles = (arr) => {
    const maxEl = Math.max(...arr)

    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxEl) {
            count++
        }
    }

    return count
}

console.log(birthdayCakeCandles(sample))