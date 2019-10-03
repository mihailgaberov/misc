const arrSize = 5 // Starting with a 1-indexed array of zeros, the number of elements in your array
const queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ] // a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
const largeInput = 10000000
const largeQueries = [ [ '1400906', '9889280', '90378' ],
[ '6581237', '9872072', '87106' ],
[ '4386373', '9779851', '52422' ],
[ '198648', '4373818', '52898' ],
[ '5770793', '6783792', '71662' ],
[ '8347130', '8855655', '73004' ],
[ '3864995', '9096330', '24671' ],
[ '503878', '6711964', '63592' ],
[ '1523170', '4839982', '9906' ],
[ '8537134', '8724078', '71133' ],
[ '124983', '3641723', '76764' ],
[ '848453', '9222572', '48836' ],
[ '3608944', '4251911', '28686' ],
[ '499113', '2920685', '43685' ],
[ '4073583', '7282905', '14478' ],
[ '261598', '8654911', '77959' ],
[ '2519906', '6734602', '90640' ],
[ '559273', '5540135', '2603' ],
[ '380116', '9039217', '42124' ],
[ '1433601', '9349123', '66201' ],
[ '5075324', '6436608', '7536' ],
[ '3413373', '8440128', '30107' ],
[ '2692039', '2778561', '55402' ],
[ '1923599', '5612723', '54515' ],
[ '1267285', '9686306', '53771' ],
[ '2464255', '8898115', '8681' ],
[ '4876074', '9198856', '28586' ],
[ '2274480', '2466714', '85073' ],
[ '1313696', '9285669', '81540' ],
[ '662819', '7627793', '15141' ],
[ '7099426', '7210346', '6816' ],
[ '3029150', '9434234', '46943' ] ]

function arrayManipulation(n, queries) {
    console.time('fill')
    const arr = new Array(n).fill(0);
    console.timeEnd()

    console.time('st')
    queries.forEach(el => {
        const leftIdx = el[0]
        const rightIdx = el[1]
        const summand = el[2]

        // for (let i = leftIdx - 1; i <= rightIdx - 1; i++) {
        //     arr[i] += summand
        // }
    });
    
    // return Math.max(...arr)
    arr.sort((a, b) => b - a)
    const firstHalf = arr.slice(0, Math.floor(arr.length / 64))
    const secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length)
    const res1 = Math.max(...firstHalf)
    const res2 = Math.max(...secondHalf)
    console.timeEnd('st')
    return res1 > res2 ? res1 : res2
}

// console.log(arrayManipulation(arrSize, queries)) // 200

console.log(arrayManipulation(largeInput, largeQueries))

