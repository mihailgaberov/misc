/* OLD
const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);
*/


const compose = (a, b) => x => a(b(x))
const reverse = array => [...array].reverse()

// `get` is a simple accessor function, used for selecting an item in an array.
const get = id => array => array[id]

// This functional version of map accepts our function first.
const map = (fn, array) => array.map(fn)

// `pluck` allows us to map through a matrix, gathering all the items at a
// specific index.
const pluck = (index, data) => map(get(index), data)

// `rangeFrom` creates an array equal in length to the array provided,
// but with a 0-based range for values.
// eg. ['a', 'b', 'c'] -> [0, 1, 2]
const rangeFrom = ({ length }) => [...Array(length).keys()]


const flipMatrix = matrix => (
  map(index => pluck(index, matrix), rangeFrom(matrix))
)

const rotateMatrix = compose(flipMatrix, reverse)
const flipMatrixCounterClockwise = compose(reverse, rotateMatrix)
const rotateMatrixCounterClockwise = compose(reverse, flipMatrix)

console.log('rotate: ', rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

console.log('flip counter clock', flipMatrixCounterClockwise([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

console.log('rotate counter clock', rotateMatrixCounterClockwise([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
