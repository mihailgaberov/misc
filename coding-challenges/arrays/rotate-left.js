const n = 5
const d = 4
const a = [1, 2, 3, 4, 5]

const rotate = (n, d, a) => {
    
    for (let i = 0; i < d; i++) {
        const firstElement = a.shift()
        a.push(firstElement)
    }

    console.log(a.join(' '))
}

rotate(n, d, a)