const sampleInputStrings = ['aba', 'baba', 'aba', 'xzxb']
const sampleInputQueries = ['aba', 'xzxb', 'ab']
const sampleInputStrings1 = ['def', 'de' , 'fgh']
const sampleInputQueries1 = ['de', 'lmn', 'fgh']
const sampleInputStrings2 = ['abcde',
    'sdaklfj',
    'asdjf',
    'na',
    'basdn',
    'sdaklfj',
    'asdjf',
    'na',
    'asdjf',
    'na',
    'basdn',
    'sdaklfj',
    'asdjf'
]
const sampleInputQueries2 = ['abcde',
    'sdaklfj',
    'asdjf',
    'na',
    'basdn']

function matchingStrings(strings, queries) {
    const stringsMap = {}

    strings.forEach(el => {
        if (stringsMap[el]) {
            stringsMap[el]++   
        } else {
            stringsMap[el] = 1
        }
    });

    const res = []
    queries.forEach(el => {
        if (Object.keys(stringsMap).includes(el)) {
            res.push(stringsMap[el])
        } else {
            res.push(0)
        }
    })

    return res
}

console.log(matchingStrings(sampleInputStrings, sampleInputQueries)) // 2,1,0
console.log(matchingStrings(sampleInputStrings1, sampleInputQueries1)) // 1 0 1
console.log(matchingStrings(sampleInputStrings2, sampleInputQueries2)) // 1 3 4 3 2
