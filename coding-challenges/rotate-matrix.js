const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

/*const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);*/

/*const rotateMatrixCounterClockwise = matrix => (
  flipMatrix(matrix).reverse()
);*/

const reverse = array => [...array].reverse();
const compose = (a, b) => x => a(b(x));

const rotateMatrix = compose(flipMatrix, reverse);
const flipMatrixCounterClockwise = compose(reverse, rotateMatrix);
const rotateMatrixCounterClockwise = compose(reverse, flipMatrix);

console.log(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

console.log(rotateMatrixCounterClockwise([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
