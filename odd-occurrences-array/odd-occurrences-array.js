'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Input: ', (arr) => {
	console.log('');
	console.log('The rotated array is: ', getRotatedArray(arr, num));
	console.log('');

	rl.close();
});


function solution (arr) {
	
}