'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Input: ', (arr) => {
	console.log('');
	console.log('Output: ', isProperlyNested(str));	// Uncomment this is you want to input data via cmd
	console.log('');
	rl.close();
});

function isProperlyNested (str) {
	
}