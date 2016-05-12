'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter a zero-indexed array consisting of integers and an integer K? ', (arr, numOfRotations) => {
	console.log('');
	console.log('The length of the longest binary gap: ', getRotatedArray(arr, numOfRotations));
	console.log('');

	rl.close();
});

function getRotatedArray (arr, numOfRotations) {
	if (numOfRotations < 0 || numOfRotations > 100) {
		console.log("The number of the rotations should be within the range [0..100].");
		return;
	}

	var i = 0;
	for (; i < numOfRotations; i++) {
		arr = arr.map((val, idx) => {
			console.log("val: ", val);
			console.log("idx: ", idx);
		});
	}
}