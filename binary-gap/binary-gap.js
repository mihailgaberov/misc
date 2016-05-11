'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a positive integer decimal number? ', (num) => {
  console.log('');
  console.log('The binary answer is this: ', convertToBinary(num));
  console.log('The length of the longest binary gap: ', getLongestBinaryGap(num));
  console.log('');

  rl.close();
});

function convertToBinary (n) {
	if ((/[^0-9]/g.test(n)) || n == "") {
		console.log("You must enter an integer decimal number!");
		return 0;
	}

	n = parseInt(n);
	let bin = n.toString(2);

	return bin;
}

function getLongestBinaryGap (binNum) {
	 let zeros = [];

	 let arrBin0 = convertToBinary(binNum).split('0');
	 let arrBin1 = convertToBinary(binNum).split('1');

	 arrBin0.forEach((el) => {
	 	console.log("el: ", el);
	 	// console.log("el len: ", el.length);
	 });


	 arrBin1.forEach((el) => {
	 	console.log("el: ", el);
	 	// console.log("el len: ", el.length);
	 });

	 return arrBin0;
}